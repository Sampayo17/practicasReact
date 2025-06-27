export default function Test() {
  return (
    <>
      <div>
        <h3 className="text-3xl font-bold">Test</h3>
        <div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-linkedin" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-facebook" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-instagram" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24">
              <use href="/sprite.svg#icon-youtube" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
