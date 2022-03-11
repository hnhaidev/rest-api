export default function url(path: any) {
  return `https://${process.env.REACT_APP_SERVER || 'jsonplaceholder.typicode.com'}/${
    path[0] === '/' ? path.substr(1) : path
  }`;
}
