import Papa from "papaparse";

const link = process.env.DB_GOOGLE
async function GET() {
  const res = await fetch(link);

  const data = await res.text();
  const parsed = await new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
  console.log(parsed);
  return parsed;
}
export default GET;
