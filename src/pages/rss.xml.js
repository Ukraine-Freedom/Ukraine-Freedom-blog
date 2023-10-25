import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const builderApiPublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
  const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;
  const { results: posts } = await fetch(
    `https://cdn.builder.io/api/v3/content/${builderModel}?${new URLSearchParams({
      apiKey: builderApiPublicKey,
      'sort.data.publishDate': -1,
      cachebust: "true",
    }).toString()}`
  )
    .then((res) => res.json())
    .catch();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        updatedDate: post.lastUpdated,
        coverImage: post.data.coverimage,
        link: `/blog/${post.data.slug}/`,
      }
    }),
	});
}
