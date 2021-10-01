import React,{useEffect,useState} from 'react';

const Chat = ({socket,room,username}) => {

    const [massges,setMassges] = useState([])
    const [msgInput,setMsgInput] = useState([])

    useEffect(() => {
        console.log('on useEffect');
        socket.on('receive_message',(data,callback)=> {
        console.log('on cleint receive_message');
          massges.push(data)
          setMassges([...massges]);
        })


    },[socket])


    const sendMsg = async (msg,room,username) => {
      await socket.emit('send_message',{msg,room,username})
      setMassges([msg,...massges]);
    }


    return(
      <>
      {massges.map((ele)=> {
        return <h1>{ele}</h1>
      })}
    <h1>chat</h1>


      <input onChange={(e)=>{setMsgInput(e.target.value)}}/>
      <button onClick={() => sendMsg(msgInput,room,username)}>send</button>

      
    </>
    
    )
}

export default Chat;