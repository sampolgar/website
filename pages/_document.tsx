// import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

// class MyDocument extends Document {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx);

//     return initialProps;
//   }
// }

// export default MyDocument;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;700&family=Poppins:wght@300;700&display=swap'
        rel='stylesheet'
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
