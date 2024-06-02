import supabase from "../../supabase";

const jsonPath = "../data.json";

// Read JSON data from the file
export default async function uploadDataJson() {
  fetch(jsonPath)
    .then((response) => response.json())
    .then(async (jobData) => {
      // Upsert data to Supabase
      const { data: supabaseData, error } = await supabase
        .from("jobs")
        .upsert(jobData, { onConflict: ["id"] }); // 'id' is the primary key

      if (error) {
        console.error("Error uploading job data:", error);
      } else {
        console.log("Job data uploaded successfully:", supabaseData);
      }
    })
    .catch((err) => {
      console.error("Error reading data file:", err);
    });
}
