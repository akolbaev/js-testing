const get = (url) => {
  return Promise.resolve({
    data: { titles: ["Lord Commander of the Night's Watch"] },
  });
};

exports.get = get;
