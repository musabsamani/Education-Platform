async function preFindOneAndDeleteMiddleware(collectionToCheck, GeneralRuledb, property, id, next) {
  try {
    let cascade = await GeneralRuledb.findOne({ name: "deleteCascade" });
    if (cascade) {
      cascade = cascade.value;
    }
    let isReferenced = await collectionToCheck.find({ [property]: id });
    isReferenced.length === 0 ? (isReferenced = false) : isReferenced;
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
    let cascade = await GeneralRuledb.findOne({ name: "deleteCascade" });
    if (cascade) {
      cascade = cascade.value;
    }
    let lessonIdArray;
    let subjecIsReferencedByVolunteer = await collectionArray[0].find({ subject: id });
    let subjecIsReferencedByLesson = await collectionArray[1].find({ subject: id });
    if (subjecIsReferencedByLesson) {
      lessonIdArray = subjecIsReferencedByLesson.map((lesson) => lesson._id);
    }
    let isReferenced = subjecIsReferencedByVolunteer || subjecIsReferencedByLesson;
    isReferenced.length === 0 ? (isReferenced = false) : isReferenced;
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
