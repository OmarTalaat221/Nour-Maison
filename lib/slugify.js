function slugify(title) {
  return title
    ?.toLowerCase()
    .replace(/[^\w\s,-]/g, '')    // allow commas temporarily
    .replace(/[\s,]+/g, '-')      // replace spaces and commas with -
    .replace(/--+/g, '-');        // remove duplicate dashes
}

export default slugify;
