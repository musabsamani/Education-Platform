async function preFindOneAndDeleteMiddleware(collectionToCheck, GeneralRuledb, property, id, next) {
  try {
    let cascade = GeneralRuledb.find({ name: "cascade" });
    console.log(cascade);
    cascade = null;
    // console.log(cascade);
    let isReferenced = await collectionToCheck.find({ [property]: id });
    if (isReferenced) {
      if (!cascade) {
        throw new Error(`cannot delete this document it has refrencing`);
      } else {
        let remove = await collectionToCheck.deleteMany({ [property]: id });
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}
async function subjectPreFindOneAndDeleteMiddleware(collectionArray, GeneralRuledb, id, next) {
  try {
    let cascade = GeneralRuledb.find({ name: "cascade" });
    console.log(cascade);
    cascade = null;
    // console.log(cascade);
    let lessonIdArray;
    let subjecIsReferencedByVolunteer = await collectionArray[0].find({ subject: id });
    let subjecIsReferencedByLesson = await collectionArray[1].find({ subject: id });
    if (subjecIsReferencedByLesson) {
      lessonIdArray = subjecIsReferencedByLesson.map((lesson) => lesson._id);
    }
    let isReferenced = subjecIsReferencedByVolunteer || subjecIsReferencedByLesson;
    if (isReferenced) {
      if (!cascade) {
        throw new Error(`cannot delete this document it has refrencing`);
      } else {
        let deletedSession = [];
        let deletedVolunteer = await collectionArray[0].deleteMany({ subject: id });
        let deletedLesson = await collectionArray[1].deleteMany({ subject: id });
        if (lessonIdArray) {
          for (i = 0; i < lessonIdArray.length; i++) {
            deletedSession.push(await collectionArray[2].deleteMany({ lesson: lessonIdArray[i] }));
          }
        }
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}
module.exports = { preFindOneAndDeleteMiddleware, subjectPreFindOneAndDeleteMiddleware };
