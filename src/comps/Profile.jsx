import React from 'react';



class Singer extends React.Component {
  render() {
    const conSty = { border: "2px solid black", padding: "3px", width: "180px", background: "rgb(196, 254, 169)", margin: "4px" }
    const imgSty ={ border: "2px solid black", width: "170", height: "210px", margin: "4px auto", display: "block"}
    const myst = { border: "4px solid white", display: "flex", flexWrap: "wrap", background:"gray", padding: "10px" }

    const data = this.props.data;


    const singerProfile = data.map((person) => {
      return (
        <div style={conSty} key={person.id}>
          <img style={imgSty} src={person.pic} alt="Missing Pic"/>
          <div><strong> Name: </strong>{person.name}</div>
          <div><strong> Group: </strong>{person.group}</div>
          <div><strong> Country: </strong>{person.country}</div>
        </div>
      )
    });


    return(
      <nav style={myst}>{singerProfile}</nav>
    )
  }
}

export default Singer;
