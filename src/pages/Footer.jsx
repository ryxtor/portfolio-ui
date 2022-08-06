const Footer = () => (
  <footer className="bg-gray-300 dark:bg-gray-800">
    <div className="container">
      <div className="text-center">
        <p className="pb-10 dark:text-gray-300 font-Raleway px-8">
          <strong className="font-Finger-Paint text-gray-600 dark:text-gray-400">Portfolio</strong>
          {' '}
          made by
          {' '}
          <a href="https://www.github.com/ryxtor" target="_blank" rel="noreferrer" className="font-Finger-Paint text-purple-800 dark:text-purple-500">Lucas Bonnefon</a>
          {' '}
          and
          {' '}
          <a href="https://www.github.com/omar25ahmed" target="_blank" rel="noreferrer" className="font-Finger-Paint text-purple-800 dark:text-purple-500">Omar Ragheb</a>
          . The source code is licensed
          {' '}
          <a href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noreferrer" className="text-purple-700 dark:text-purple-500 underline">MIT</a>
          . The website content
          is licensed
          {' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer" className="text-purple-700 dark:text-purple-500 underline">CC BY NC SA 4.0</a>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
