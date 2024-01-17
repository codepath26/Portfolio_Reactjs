
function DateMaker({ createdAtString }) {
  // console.log(createdAtString , "string" ,typeof createdAtString);
  const createdAtDate = new Date(createdAtString);
  // console.log(createdAtDate)
  // Extracting individual components
  const year = createdAtDate.getFullYear();
  const month = (createdAtDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = createdAtDate.getDate().toString().padStart(2, "0");

  // Creating the date string in the format YYYY-MM-DD
  const formattedDate = ` ${day}-${month}-${year}`;
  // console.log(formattedDate , "formatedate" , typeof formattedDate)
  return  formattedDate ; // Output: "2023-09-05"
}

export default DateMaker;
