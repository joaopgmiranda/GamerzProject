import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/avatar'
import Botao from '../components/botao'
import { UploadImagem } from '../components/uploadImagem'

export default function Home() {
  return (
    <>
      <h1>Ola mundo!</h1>
      <UploadImagem />
      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor ='invertido' manipularClique={() => console.log('botao clicado')} />
      </div>
    </>
  )
}
