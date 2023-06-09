const baseUrl = "https://streaming-availability.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "54996cc34cmsh56bbb3ad4780520p17a8d0jsnb76037d0fcb1",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

export async function getMovies() {
  const url = `${baseUrl}/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
