const TopNav = ({navigate}) => {
  return (
    <div className="nav">
      <button onClick={() => navigate('AZ 900')}>AZ-900</button>
      <button onClick={() => navigate('SC 300')}>SC-300</button>
    </div>
  );
}

export default TopNav;