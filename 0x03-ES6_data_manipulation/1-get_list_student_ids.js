export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
    return [];
  }

  // Use the map function to extract the ids
  return objectsArray.map((obj) => obj.id);
}
