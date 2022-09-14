const modules = import.meta.glob("./posts/*.md", { eager: true });

export const getPosts = () => {
  return modules;
}

export const getPostTitles = () => {
    const titles = []
    for (const path in modules) {
      const mod = modules[path]
      titles.push(mod.attributes.title)
    }
    return titles
}

export const getPostsAndTitles = () => {
  const posts = getPosts()
  const titles = getPostTitles()
  return {
    posts,
    titles
  }
}

export const getPrettyPosts = () => {
  const prettyPosts = []
  for (const path in modules) {
      const mod = modules[path]
      prettyPosts.push({
        ...mod.attributes,
        content: mod.html,
      })
    }
    return prettyPosts
}

export const getPostBySlug = ({ params }) => {
  const posts = getPrettyPosts();
  let found = null
  posts.forEach(element => {
    if(element.slug === params.postSlug) found = element
  });

  return found
}