const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmMyNTZlMGNjZjM1MzkxOTMxZDg5YjkyYjE1MTBhMCIsInN1YiI6IjYzZTg1MDAzNjNhYWQyMDA4Zjg1YTM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.om74K_6IUfHirygkrWYTuRHWgmWbJWQGjx5MpeT0IjM",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
