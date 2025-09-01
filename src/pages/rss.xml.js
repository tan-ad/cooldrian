import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('thoughts');
	const publishedPosts = posts.filter(post => !post.data.draft);
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: publishedPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.summary || '',
			link: `/thoughts/${post.slug}/`,
		})),
	});
}
