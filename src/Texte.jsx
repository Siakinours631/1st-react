

const Texte = ({children, couleur}) => {
  return (
    <div>
      <p>
        <b style={{color: couleur}}> {children}Mon premier React </b> {" "}<br/>
        Ici, le logo React : 
      </p>
    </div>
  );
}

export default Texte
