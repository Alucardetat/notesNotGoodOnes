const storiesContainer = document.getElementById('stories');

const clearPage = () => {
    storiesContainer.innerHTML = '';
};

const fetchStoryDetails = async (storyId) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
    if (!response.ok) {
        throw new Error(`Error fetching story details for ID ${storyId}: ${response.statusText}`);
    }
    return response.json();
};

const createStoryElement = (story) => {
    const { id, score, url, title, by, type, descendants } = story;
    const storyElement = document.createElement('div');
    storyElement.className = 'story';

    let storyHtml = `
        <p>${score} points - <a href="${url}" target="_blank">${title}</a></p>
        <p>Submitted by ${by}</p>`;

    if (type !== 'job') {
        storyHtml += `
            <p>${descendants} comments</p>
            <button class="comments-btn" data-story-id="${id}">View Comments</button>
            <div class="comments-section" style="display: none;" data-story-id="${id}"></div>`;
    }

    storyElement.innerHTML = storyHtml;
    return storyElement;
};

const fetchAndRenderTopStories = async (storyIds) => {
    clearPage();

    await Promise.all(storyIds.slice(0, 10).map(async (storyId) => {
        try {
            const story = await fetchStoryDetails(storyId);
            const storyElement = createStoryElement(story);
            storiesContainer.appendChild(storyElement);

            const commentsBtn = storyElement.querySelector('.comments-btn');
            commentsBtn.addEventListener('click', () => toggleCommentsSection(story.id));
        } catch (error) {
            console.error(error);
        }
    }));
};

const toggleCommentsSection = async (storyId) => {
    const commentsSection = document.querySelector(`.comments-section[data-story-id="${storyId}"]`);
    const isHidden = commentsSection.style.display === 'none' || commentsSection.style.display === '';

    commentsSection.style.display = isHidden ? 'block' : 'none';

    if (isHidden) {
        await fetchComments(storyId, commentsSection);
    }
};

const fetchComments = async (storyId, commentsSection) => {
    try {
        const story = await fetchStoryDetails(storyId);
        const commentIds = story.kids || [];

        if (commentIds.length === 0) {
            commentsSection.innerHTML = '<p>No comments for this story.</p>';
            return;
        }

        const comments = await Promise.all(commentIds.map(fetchStoryDetails));
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <p>${comment.text}</p>
                <p>by ${comment.by}</p>`;
            commentsSection.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching story details for comments:', error);
    }
};

const fetchAndRender = async (url, btnId) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching ${btnId} stories: ${response.statusText}`);
        }
        const storyIds = await response.json();
        await fetchAndRenderTopStories(storyIds);
    } catch (error) {
        console.error(error);
    }
};

document.getElementById('stories-btn').addEventListener('click', () => fetchAndRender('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', 'top'));
document.getElementById('ask-btn').addEventListener('click', () => fetchAndRender('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty', 'ask'));
document.getElementById('jobs-btn').addEventListener('click', () => fetchAndRender('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty', 'job'));