import React from 'react'

/* function list() {
  const name=['asd','zxc','qwe']
  return (
    <div>
      <h5>Rendering lists</h5>
      <h4>{name[1]}</h4>
      <h4>{name[2]}</h4>
      <h4>_______</h4>
      {
        name.map(name => <h5>{name} </h5>)
      }
    </div>
  )
}

export default list */

/* function list() {
  const name=['asd','zxc','qwe']
  const namelist=name.map(name => <h5>{name} </h5>)
  return (
    <div>
      {
        namelist
      }
    </div>
  )
}

export default list  */
function list() {
  const person=[
    {
      name:'azsx',
      age:11,
      skill:'azsxdcfv'
    }
  ]
  const namelist=person.map(person => (<h5>i am {person.name}.....{person.age}....{person.skill} </h5>))
  return (
    <div>
      {
        namelist
      }
    </div>
  )
}

export default list 

