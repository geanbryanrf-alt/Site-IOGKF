import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SecaoESe from '@/components/SecaoESe';
import SecaoLegado from '@/components/SecaoLegado';
import SecaoExperiencia from '@/components/SecaoExperiencia';
import SecaoMosteiro from '@/components/SecaoMosteiro';
import SecaoGaleria from '@/components/SecaoGaleria';
import SecaoInstrutores from '@/components/SecaoInstrutores';
import ProgramacaoDiaria from '@/components/ProgramacaoDiaria';
import SecaoHospedagem from '@/components/SecaoHospedagem';
import SecaoTransporte from '@/components/SecaoTransporte';
import SecaoHotel from '@/components/SecaoHotel';
import SecaoExtras from '@/components/SecaoExtras';
import SecaoInscricaoAntecipada from '@/components/SecaoInscricaoAntecipada';
import SecaoInvestimento from '@/components/SecaoInvestimento';
import FormularioInscricao from '@/components/FormularioInscricao';
import PerguntasFrequentes from '@/components/PerguntasFrequentes';
import SecaoContato from '@/components/SecaoContato';
import ChamadaFinal from '@/components/ChamadaFinal';
import Footer from '@/components/Footer';
import BotaoInscricaoFixo from '@/components/BotaoInscricaoFixo';
import NotificacoesInscricao from '@/components/NotificacoesInscricao';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SecaoESe />
      <SecaoLegado />
      <SecaoExperiencia />
      <SecaoMosteiro />
      <SecaoGaleria />
      <SecaoInstrutores />
      <ProgramacaoDiaria />
      <SecaoHospedagem />
      <SecaoTransporte />
      <SecaoHotel />
      <SecaoExtras />
      <SecaoInscricaoAntecipada />
      <SecaoInvestimento />
      <FormularioInscricao />
      <PerguntasFrequentes />
      <SecaoContato />
      <ChamadaFinal />
      <Footer />
      <BotaoInscricaoFixo />
      <NotificacoesInscricao />
    </main>
  );
}
