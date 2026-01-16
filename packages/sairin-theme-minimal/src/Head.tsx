export default function Head(props: { sairinConfig: any }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
        integrity="sha384-vFEKS4hHSxIVqmYSltpM4iY89uq6qO3eKYQ105Yny4HOt5w4r3eqbYx7JwO31q/9"
        crossOrigin="anonymous"
      />

      {props.sairinConfig.themeConfig.umami && (
        <script
          async
          defer
          data-website-id={props.sairinConfig.themeConfig.umami.id}
          src={props.sairinConfig.themeConfig.umami.src}
        ></script>
      )}
    </>
  );
}
