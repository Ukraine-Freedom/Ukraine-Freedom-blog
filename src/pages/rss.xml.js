import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const builderApiPublicKey = import.meta.env.BUILDER_API_PUBLIC_KEY;
  const builderModel = import.meta.env.BUILDER_BLOGPOST_MODEL;
  const { results: posts } = await fetch(
    `https://cdn.builder.io/api/v3/content/${builderModel}?${new URLSearchParams({
      apiKey: builderApiPublicKey,
      cachebust: "true",
    }).toString()}`
  )
    .then((res) => res.json())
    .catch();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
