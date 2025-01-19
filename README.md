# Next.js 15 Fetch API Error in Page Component
This repository demonstrates a common error in Next.js 15 when using the `fetch` API directly within a page component.  The `fetch` API should be used within `getStaticProps` or `getServerSideProps` to handle data fetching correctly.  The solution shows how to fix this.

## Bug
The bug is that the `fetch` call is made directly within the `About` page component. This is not allowed; instead you should use `getStaticProps` or `getServerSideProps`.