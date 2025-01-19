```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because 'fetch' is not allowed here
  // It only works in the `getStaticProps` or `getServerSideProps` functions.
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```