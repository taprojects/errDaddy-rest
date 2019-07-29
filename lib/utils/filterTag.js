function filterTag(tag, errors) {
  return errors.filter(tagItem => {
    return tagItem.tags.includes(tag);
  });
}

module.exports = { filterTag };
