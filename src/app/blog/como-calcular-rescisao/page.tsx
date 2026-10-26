import type { Metadata } from "next";

import { createAbsoluteUrl, createPageMetadata } from "@/lib/seo";
import {
  BlogArticleHeader,
  ContentPage,
  ContentHero,
  ContentBody,
  ContentCTA,
  ContentRelatedLinks,
} from "@/components/content-page";

export const metadata: Metadata = createPageMetadata({
  title:
    "Como calcular rescisão: verbas, multa do FGTS e prazos em 2026",
  description:
    "Como calcular rescisão: verbas por tipo de demissão, multa de 40% do FGTS, descontos de INSS e IRRF e um exemplo completo com salário de R$ 3.000 em 2026.",
  pathname: "/blog/como-calcular-rescisao",
  openGraphType: "article",
});

const pageUrl = createAbsoluteUrl("/blog/como-calcular-rescisao");
const homeUrl = createAbsoluteUrl("/");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Como calcular rescisão: verbas, multa do FGTS e prazos em 2026",
  description:
    "Como calcular rescisão: verbas por tipo de demissão, multa de 40% do FGTS, descontos de INSS e IRRF e um exemplo completo com salário de R$ 3.000 em 2026.",
  url: pageUrl,
  inLanguage: "pt-BR",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  author: {
    "@type": "Organization",
    name: "Salário Líquido",
    url: homeUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Salário Líquido",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
};

export default function ComoCalcularRescisao() {
  return (
    <ContentPage jsonLd={jsonLd}>
      <ContentHero
        eyebrow="Rescisão CLT"
        title="Como calcular rescisão: verbas, multa do FGTS e prazos em 2026"
        description="Quais verbas entram em cada tipo de demissão, como fica a multa de 40% do FGTS, o que sofre INSS e IRRF e um exemplo completo com salário de R$ 3.000, já com as tabelas de 2026."
      />

      <ContentBody>
        <BlogArticleHeader
          breadcrumbLabel="Rescisão"
          date="26 de outubro de 2026"
          readingTime="9 min de leitura"
        />

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          O que é a rescisão e quando cada verba é devida
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A rescisão é o acerto de contas do fim do contrato de trabalho: o
          empregador paga o que o empregado já adquiriu e ainda não recebeu,
          mais as indenizações que a forma de extinção do contrato exige. A
          lista de verbas muda conforme o motivo do fim, e é aí que mora a
          maior parte dos erros de cálculo.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na dispensa sem justa causa, o conjunto é completo: saldo de
          salário, aviso prévio (trabalhado ou indenizado), férias vencidas e
          proporcionais com o terço constitucional, 13º proporcional, multa
          de 40% sobre o saldo do FGTS, saque integral do FGTS e, cumpridos
          os requisitos, seguro-desemprego.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No pedido de demissão, o empregado recebe saldo de salário, 13º
          proporcional e férias vencidas e proporcionais com o terço, mas
          não recebe aviso prévio do empregador, multa do FGTS, saque do
          FGTS nem seguro-desemprego. E atenção ao sentido inverso do aviso:
          se o empregado pede demissão e não cumpre o aviso, o empregador
          pode descontar os salários correspondentes ao prazo (CLT, art.
          487, § 2º).
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Na dispensa por justa causa, só restam os direitos já adquiridos:
          saldo de salário e férias vencidas com o terço (CLT, art. 482).
          Não há aviso prévio, 13º proporcional, férias proporcionais,
          multa do FGTS nem seguro-desemprego.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No acordo entre empregado e empregador, a CLT prevê uma solução
          intermédia (art. 484-A, incluído pela Lei 13.467/2017): o aviso
          prévio, se indenizado, e a indenização sobre o saldo do FGTS são
          pagos pela metade, ou seja, o aviso cai para 50% e a multa do
          FGTS cai de 40% para 20%; as demais verbas são pagas na
          integralidade. O saque do FGTS fica limitado a 80% do valor dos
          depósitos (art. 484-A, § 1º), e o acordo não dá direito ao
          seguro-desemprego (art. 484-A, § 2º).
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No contrato por prazo determinado, a regra muda de novo: se o
          empregador dispensa sem justa causa antes do termo, deve pagar, a
          título de indenização, metade da remuneração a que o empregado
          teria direito até o fim do contrato (CLT, art. 479), com as
          exceções dos arts. 480 e 481.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Verbas rescisórias, uma a uma
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O saldo de salário é o mais simples: os dias trabalhados no mês
          da rescisão, à razão de salário dividido por 30 vezes os dias
          trabalhados. Quem trabalhou 10 dias de um salário de R$ 3.000
          recebe R$ 1.000 de saldo.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As férias seguem as regras detalhadas no guia de férias (arts.
          146 a 148 da CLT): na rescisão, pagam-se as férias vencidas,
          simples ou em dobro conforme o caso, e as proporcionais à razão
          de 1/12 por mês de serviço ou fração superior a 14 dias, sempre
          acrescidas do terço constitucional (CF/88, art. 7º, XVII). O
          cálculo completo está no guia de férias.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O 13º proporcional segue a mesma lógica de 1/12 por mês
          trabalhado no ano, contando a fração igual ou superior a 15 dias
          como mês cheio, e o seu cálculo detalhado está no guia do décimo
          terceiro.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Uma regra vale para as duas contagens e decide o exemplo deste
          guia: os dias do aviso prévio, mesmo indenizado, contam como
          tempo de serviço no mês em que caem (CLT, art. 487, § 1º). Ou
          seja, um mês soma na contagem quando reúne 15 dias ou mais de
          trabalho ou de projeção do aviso (para o 13º) ou fração superior
          a 14 dias (para as férias proporcionais). Dias trabalhados e
          dias projetados somam dentro do mesmo mês; não se contam duas
          vezes.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O aviso prévio merece atenção própria. A CLT fixa 30 dias para
          quem recebe por quinzena ou mês ou tem mais de 12 meses de
          serviço (art. 487, II), e a Lei 12.506/2011 acrescenta 3 dias por
          ano de serviço na mesma empresa, até o máximo de 60 dias
          adicionais, totalizando no máximo 90 dias (Lei 12.506/2011, art.
          1º, parágrafo único). O aviso pode ser trabalhado, com redução
          de 2 horas diárias ou 7 dias corridos de folga para procurar
          emprego (CLT, art. 488), ou indenizado, pago em dinheiro sem
          trabalho. O período do aviso, mesmo indenizado, integra o tempo
          de serviço do empregado (CLT, art. 487, § 1º), e é por isso que
          ele pode empurrar a contagem de meses do 13º e das férias
          proporcionais: um aviso que projeta o fim do contrato para 15 dias ou mais dentro de um mês soma mais um mês a essas contagens;
          abaixo de 15 dias, não soma.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Multa do FGTS
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          A multa rescisória do FGTS é de 40% sobre o saldo da conta
          vinculada (Lei 8.036/1990, art. 18, § 1º). A base é o total dos
          depósitos feitos durante o contrato, com juros e atualização
          monetária: não é 40% do salário, nem 40% de um único mês, mas
          40% de tudo o que foi depositado. O depósito mensal do FGTS é
          de 8% da remuneração (Lei 8.036/1990, art. 15), pago pelo
          empregador, nunca descontado do empregado.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Um ponto que ainda gera confusão: até 2019, além dos 40% pagos
          ao trabalhador, o empregador recolhia mais 10% de contribuição
          social ao governo, criada pela Lei Complementar 110/2001, o que
          fazia muita gente falar em “50%”. Essa contribuição social de
          10% foi extinta pela Lei 13.932/2019, art. 12, valendo para as
          rescisões a partir de 1º de janeiro de 2020. Em 2026, portanto,
          não há mais 50%: a multa é só os 40% ao trabalhador, ou 20% no
          acordo do art. 484-A. O saldo do FGTS em si, que pertence ao
          trabalhador, pode ser sacado integralmente na dispensa sem
          justa causa.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Descontos na rescisão: INSS e IRRF, verba por verba
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Nem tudo o que entra na rescisão sofre desconto, e a diferença
          está na natureza de cada verba. O saldo de salário tem natureza
          salarial: sofre INSS e IRRF no regime mensal, como um salário
          normal. O 13º proporcional também sofre INSS e IRRF, mas
          apurado em separado, no regime exclusivo próprio do 13º, tal
          como no guia do décimo terceiro.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          As férias indenizadas, vencidas ou proporcionais, pagas na
          rescisão, com o respetivo terço, não integram o salário de
          contribuição para o INSS (Lei 8.212/1991, art. 28, § 9º, “d”) e
          não sofrem IRRF, pela sua natureza indenizatória. Atenção à
          distinção: o terço das férias gozadas tem natureza salarial e
          sofre contribuição (STF, Tema 985); o terço das férias
          indenizadas, que é o caso da rescisão, não sofre.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O aviso prévio indenizado também não sofre contribuição
          previdenciária: o STJ decidiu, em recurso repetitivo (REsp
          1.230.957/RS), que não incide contribuição sobre a indenização
          pela falta do aviso, por não haver retribuição por trabalho.
          Pela mesma natureza indenizatória, o aviso indenizado não sofre
          IRRF. A multa de 40% do FGTS, por fim, não é remuneração: não
          sofre INSS nem IRRF, e é depositada na conta do FGTS, não paga
          em mãos junto com as demais verbas.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Quanto ao desconto simplificado mensal de R$ 607,20: ele
          aplica-se ao cálculo mensal do saldo, como em qualquer mês de
          salário, e ao 13º aplica-se a regra própria do 13º (IN RFB
          1.500/2014, art. 13, § 8º, estabelecida para o 13º no guia do
          décimo terceiro). No exemplo da secção 7, o IRRF dá zero com
          ou sem o simplificado no 13º proporcional, por isso o resultado
          do exemplo não depende dessa extensão.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Prazos e multa por atraso
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O prazo é curto e único desde a reforma trabalhista: a entrega
          dos documentos da extinção e o pagamento das verbas rescisórias
          devem ser feitos até 10 dias contados a partir do término do
          contrato (CLT, art. 477, § 6º, redação da Lei 13.467/2017). São
          10 dias corridos, e o prazo vale tanto para o aviso trabalhado
          como para o indenizado.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          No aviso indenizado, o término do contrato é a data final da
          projeção do aviso, porque o período do aviso integra o tempo de
          serviço (CLT, art. 487, § 1º). No exemplo deste guia, o aviso
          projeta o término para 10 de julho, de modo que os 10 dias
          correm a partir dessa data: o pagamento deve sair até 20 de
          julho.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Se o prazo não for cumprido, o empregador paga ao empregado
          multa equivalente a um salário, salvo quando, comprovadamente,
          o trabalhador der causa à mora (CLT, art. 477, § 8º). Na
          prática: rescisão paga no 11º dia já gera a multa de um salário
          inteiro, salvo se o atraso foi culpa comprovada do próprio
          empregado, por exemplo, por não comparecer para receber. O termo
          de rescisão deve discriminar cada parcela e o seu valor, e a
          quitação vale apenas para as parcelas nele especificadas (CLT,
          art. 477, § 2º): conferir cada linha antes de assinar é o
          mínimo.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Seguro-desemprego: só uma nota de elegibilidade
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O seguro-desemprego não é pago pelo empregador e não entra no
          cálculo da rescisão, mas é a primeira pergunta de quem é
          dispensado sem justa causa, por isso fica aqui a nota de
          elegibilidade, sem tabela de parcelas. A regra está na Lei
          7.998/1990, art. 3º, com a redação da Lei 13.134/2015: na
          primeira solicitação, é preciso ter recebido salários por pelo
          menos 12 meses nos últimos 18 meses imediatamente anteriores à
          dispensa; na segunda, pelo menos 9 meses nos últimos 12 meses;
          a partir da terceira, pelo menos 6 meses imediatamente
          anteriores à dispensa. Além disso, é preciso estar desempregado
          no momento do requerimento, não ter renda própria suficiente
          para o sustento da família e não receber benefício
          previdenciário de prestação continuada, salvo pensão por morte
          ou auxílio-acidente. O pedido de demissão, a justa causa e o
          acordo do art. 484-A não dão direito ao benefício.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Exemplo trabalhado: salário de R$ 3.000, sem justa causa
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Hipóteses, todas explícitas: salário fixo de R$ 3.000, sem
          variáveis, sem dependentes, sem pensão; admitido em 1º de
          janeiro, último dia trabalhado em 10 de junho, dispensa sem
          justa causa com aviso prévio indenizado de 30 dias (menos de 1
          ano de serviço, logo sem os 3 dias adicionais da Lei
          12.506/2011); sem férias vencidas pendentes; saldo do FGTS
          assumido de R$ 1.500,00 (valor assumido para o exemplo, nunca
          derivado do salário: o saldo real depende dos depósitos
          efetivos, de juros e de correção, e supõe nenhum saque anterior,
          de modo que o saldo corresponde aos depósitos com juros e
          correção).
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Primeiro, a projeção do aviso: 30 dias a partir de 10 de junho
          projetam o término do contrato para 10 de julho. Junho reúne 10
          dias trabalhados (1 a 10 de junho) mais 20 dias projetados (11
          a 30 de junho), total de 30 dias, acima da fração de 15 dias —
          por isso junho conta como mês cheio. Julho reúne apenas 10 dias
          projetados (1 a 10 de julho), abaixo de 15 dias para o 13º e abaixo da fração superior a 14 dias para as férias — por isso não soma
          um sétimo mês. As contagens ficam em 6/12: de janeiro a junho,
          contando da admissão (1º de janeiro a 1º de julho são 6
          períodos mensais completos).
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Saldo de salário: R$ 3.000 ÷ 30 × 10 dias = R$ 1.000,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Férias proporcionais: 6/12 × R$ 3.000 = R$ 1.500,00, mais o
          terço de R$ 500,00, totalizando R$ 2.000,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          13º proporcional: 6/12 × R$ 3.000 = R$ 1.500,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Aviso prévio indenizado: 30 dias = R$ 3.000,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Total bruto a receber: R$ 1.000,00 + R$ 2.000,00 + R$ 1.500,00 +
          R$ 3.000,00 = R$ 7.500,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          INSS: sobre o saldo, 7,5% de R$ 1.000,00 = R$ 75,00; sobre o 13º
          proporcional, apurado em separado, 7,5% de R$ 1.500,00 =
          R$ 112,50; férias indenizadas e aviso indenizado são isentos
          (secção 4). Total de INSS: R$ 187,50.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          IRRF: sobre o saldo, regime mensal, base pelo desconto
          simplificado = R$ 1.000,00 − R$ 607,20 = R$ 392,80, abaixo da
          primeira faixa de R$ 2.428,80, logo R$ 0,00 (pela via das
          deduções legais, a base seria R$ 1.000,00 − R$ 75,00 =
          R$ 925,00, também abaixo da primeira faixa). Sobre o 13º
          proporcional, regime exclusivo em separado, base pelo desconto
          simplificado = R$ 1.500,00 − R$ 607,20 = R$ 892,80, também
          abaixo de R$ 2.428,80, logo R$ 0,00 (sem o simplificado, a base
          seria R$ 1.500,00 − R$ 112,50 = R$ 1.387,50, ainda abaixo da
          primeira faixa, por isso o zero não depende do simplificado).
          Férias indenizadas e aviso indenizado são isentos. Total de
          IRRF: R$ 0,00.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Líquido a receber na rescisão: R$ 7.500,00 − R$ 187,50 −
          R$ 0,00 = R$ 7.312,50.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          À parte, na conta do FGTS: multa de 40% sobre o saldo assumido
          de R$ 1.500,00 = R$ 600,00, depositada na conta vinculada, além
          do direito de sacar o próprio saldo de R$ 1.500,00. E uma nota
          final sobre o exemplo: com apenas 6 meses de salários, este
          trabalhador não cumpre os 12 meses exigidos para a primeira
          solicitação do seguro-desemprego (secção 6).
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Erros comuns
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          O erro mais caro é calcular a multa do FGTS sobre o salário em
          vez de sobre o saldo da conta: 40% de R$ 3.000 daria R$ 1.200,
          mas a base certa é o total depositado, que neste exemplo
          assumido rende R$ 600. O segundo é somar INSS e IRRF sobre
          tudo: férias indenizadas e aviso indenizado não sofrem
          desconto, e tributá-los é pagar a mais. O terceiro é ignorar a
          projeção do aviso: 30 dias de aviso podem somar um mês ao 13º
          e às férias se somarem 15 dias ou mais no mês seguinte, e
          esquecê-lo é pagar a menos. O quarto é confundir os 40% com
          50%: a contribuição social de 10% acabou em 2020. O quinto é
          assinar o termo sem conferir cada parcela: a quitação só vale
          para o que está discriminado, e o que não está lá pode ser
          cobrado depois.
        </p>

        <h2 className="font-display text-2xl tracking-[-0.03em] text-foreground md:text-3xl mt-16">
          Perguntas frequentes
        </h2>
        <div className="divide-y divide-border">
          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quem pede demissão tem direito a quê?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Saldo de salário, 13º proporcional e férias vencidas e
              proporcionais com o terço. Não tem aviso do empregador,
              multa do FGTS, saque do FGTS nem seguro-desemprego; e se
              não cumprir o aviso, o empregador pode descontar o período
              (CLT, art. 487, § 2º).
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              A multa é 40% do salário ou do saldo do FGTS?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Do saldo do FGTS: 40% de todos os depósitos do contrato,
              com juros e correção (Lei 8.036/1990, art. 18, § 1º). O
              salário só serve para estimar os depósitos mensais de 8%,
              nunca como base direta da multa.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              O aviso indenizado conta como tempo de serviço?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Sim: o período do aviso, trabalhado ou não, integra o
              tempo de serviço (CLT, art. 487, § 1º), e por isso pode
              somar um mês ao 13º e às férias proporcionais quando a
              projeção soma 15 dias ou mais no mês seguinte. No exemplo
              deste guia, junho conta porque reúne 10 dias trabalhados
              mais 20 projetados; julho não soma mês porque reúne apenas
              10 dias projetados.
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Quanto tempo tenho para receber?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              O pagamento deve sair em até 10 dias corridos a partir do
              término do contrato (CLT, art. 477, § 6º). No aviso
              indenizado, o término é a data final da projeção do aviso:
              no exemplo deste guia, 10 de julho, de modo que o prazo vai
              até 20 de julho. Atrasou, a multa é de um salário, salvo se
              o próprio trabalhador deu causa à mora (art. 477, § 8º).
            </p>
          </details>

          <details className="group py-5">
            <summary className="list-none text-lg font-medium leading-7 text-foreground">
              Fui dispensado sem justa causa depois de 6 meses: recebo
              seguro-desemprego?
            </summary>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Não na primeira solicitação: são exigidos pelo menos 12
              meses de salários nos últimos 18 meses (Lei 7.998/1990,
              art. 3º, na redação da Lei 13.134/2015). Os 6 meses são o
              piso da terceira solicitação em diante, não um atalho para
              a primeira: 6 meses não tornam uma primeira solicitação
              elegível, e o histórico de pedidos e os demais requisitos
              também contam.
            </p>
          </details>
        </div>

        <ContentCTA />

        <ContentRelatedLinks
          links={[
            {
              href: "/",
              label: "Calculadora de salário líquido",
            },
            {
              href: "/tabela-inss-2026",
              label: "Tabela INSS 2026",
            },
            {
              href: "/tabela-irrf-2026",
              label: "Tabela IRRF 2026",
            },
            {
              href: "/blog/como-calcular-decimo-terceiro",
              label: "Como calcular o décimo terceiro",
            },
            {
              href: "/blog/como-calcular-ferias",
              label: "Como calcular férias",
            },
          ]}
        />
      </ContentBody>
    </ContentPage>
  );
}

