export const soryByDate = (a, b) => {
  return new Date(b.data.date) - new Date(a.data.date)
}

export function slug(post) {
  const [year, month] = post.data.date.split('-');
  return `${year}/${month}/${post.slug}`;
}

