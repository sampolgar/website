## Before

```javascript
let message = "hello world";
console.log({ message });
```

## After

```javascript
let message: string = "hello world";
console.log({ message });
```

## Before

```javascript
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

## After

```javascript
import { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## Before

```javascript
export default (req, res) => {
  res.status(200).json({ text: "Hello" });
};
```

## After

```javascript
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
```

## Before

```javascript
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```

## After

```javascript
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
```

## Before

## After
