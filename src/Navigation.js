const Navigation = ({ prev, next }) => {
    return (
      <div className="navigation">

        <div className="navigation-item">
          {prev && (<button onClick={prev}>Previous</button>)}
        </div>
        
        <div className="navigation-item">
          {next && (<button onClick={next}>Next</button>)}
        </div>

      </div>
    );
  };
export default Navigation;