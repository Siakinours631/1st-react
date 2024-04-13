const Texte = ({children, couleur}) => {
  return (
    <div>
      <p>
        <b style={{color: couleur}}> {children}Mon premier React </b> {" "}<br/>
        Ici, mon logo : 
      </p>
    </div>
  );
}

export default Texte
