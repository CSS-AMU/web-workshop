import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardComp from './card';

const Pokedex = () => {
    const [name, setname] = useState("");
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`

        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error("Couldn't get data")
                }
                return res.json()
            }).then(data=>{
                setdata(data)
                console.log(data)
            }).catch(err => {
                seterror(true)
                console.log(err.message)
            })
    }

    return ( <div>
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={((e)=>setname(e.target.value))} />
            </Form.Group>
            <Button className="roomfac" variant="primary" type="submit">Submit</Button>
        </Form>
        {error && <h6>"Can't fetch"</h6> }
        {data && <CardComp data={data}/>}
    </div> );
}
 
export default Pokedex;