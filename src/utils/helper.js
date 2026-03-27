export const getInitials = (name) => {
  if(!name) return ""; 
  const words =  name.split(" "); 
  let initials = ""; 
  for(let i=0; i<Math.min(words.length, 2); i++){
    initials += words[i][0];
  }
  return initials.toUpperCase(); 
}


export const sortUsers = (users, sortOrder) => {
  return [...users].sort((a, b) => {
    const nameCompare = sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);

    if (nameCompare !== 0) {
      return nameCompare;
    }

    if (a.company && b.company) {
      return sortOrder === 'asc'
        ? a.company.name.localeCompare(b.company.name)
        : b.company.name.localeCompare(a.company.name);
    }

    return 0;
  });
};