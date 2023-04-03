function populateFind(data, resource) {
  if (resource == "session") {
    return data
      .populate("subject")
      .populate("room")
      .populate("volunteer")
      .populate({
        path: "lesson",
        populate: {
          path: "subject",
        },
      });
  }
}
async function populateSave(data, resource) {
  if (resource == "session") {
    await data.populate("subject");
    await data.populate("volunteer");
    await data.populate("room");
    await data.populate({
      path: "lesson",
      populate: {
        path: "subject",
      },
    });
    return data;
  }
}
module.exports = { populateFind, populateSave };
