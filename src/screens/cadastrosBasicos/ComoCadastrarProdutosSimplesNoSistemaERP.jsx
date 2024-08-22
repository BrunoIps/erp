import React from "react";
import { Typography, Container } from "@mui/material";
import TitleComponent from "../../components/titlePage/title";
import Image1 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP1.png";
import Image2 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP2.png";
import Image3 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP3.png";
import Image4 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP4.png";
import Image5 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP5.png";
import Image6 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP6.png";
import Image7 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP7.png";
import Image8 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP8.png";
import Image9 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP9.png";
import Image10 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP10.png";
import Image11 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP11.png";
import Image12 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP12.png";
import Image13 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP13.png";
import Image14 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP14.png";
import Image15 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP15.png";
import Image16 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP16.png";
import Image17 from "../../assets/ComoCadastrarProdutosSimplesNoSistemaERP17.png";
import BoxImage from "../../components/Image/BoxImage";

const ComoCadastrarProdutosSimplesNoSistemaERP = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <TitleComponent>
        Como cadastrar Produtos Simples no Sistema ERP
      </TitleComponent>

      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          Uma das funções básicas e mais utilizadas dentro do Sistema ERP é o
          cadastro de produtos. É fundamental compreender como funcionam as
          seções e campos desse cadastro, pois é a partir dele que você irá
          controlar o estoque, trabalhar com preços, definir comissões dos
          vendedores e informar os dados fiscais para não ter dores de cabeça
          futuras com emissão de notas.
        </p>

        <p>
          Para realizar o cadastro dos produtos no sistema, acesse o menu
          <b> Cadastros</b>, submenu <b>Novo</b> <b>Produto</b>.
        </p>

        <BoxImage src={Image1} />

        <p>Nesta etapa você deverá informar os dados básicos do produto.</p>

        <BoxImage src={Image2} />

        <p>
          <strong>Nome do Produto:</strong> informe o nome do novo produto que
          está sendo cadastrado. Este nome é único, portanto, o sistema não
          cadastrará nomes de produtos repetidos;
        </p>
        <p>
          <strong>Tipo do produto:</strong> nesse campo selecione um dos tipos
          de produto entre: Simples, Variável, Variação e Pizza;
        </p>
        <p>
          <strong>Código do Sistema:</strong> este código será gerado
          automaticamente pelo sistema para controle do produto;
        </p>
        <p>
          <strong>Código do Produto:</strong> informe um código para localizar o
          referido produto mais facilmente nas outras telas do sistema. Este
          código é único, ou seja, você não poderá cadastrar dois ou mais
          produtos com o mesmo código;
        </p>
        <p>
          <strong>Tipo/Gênero:</strong> selecione qual o tipo ou gênero do
          produto. Será este campo que irá definir se o produto é Mercadoria
          para Revenda, Matéria-Prima, ou Serviço etc. Caso seja escolhida a
          opção de serviço, automaticamente as definições de estoque são
          ignoradas;
        </p>
        <p>
          <strong>Marca:</strong> selecione a marca do produto, se houver.
        </p>
        <p>
          <strong>Categoria:</strong> selecione a categoria em que se enquadra o
          novo produto cadastrado. Para que o item, de fato, seja vinculado à
          categoria, é necessário clicar em <strong>Adicionar</strong> (o botão
          azul com símbolo de +).
        </p>
        <p>
          <strong>Ocultar nas Vendas:</strong> se você marcar esta opção, o
          produto será ocultado na tela de vendas, ou seja, você não conseguirá
          vender este item. Esta opção pode ser utilizada em produtos com vendas
          sazonais ou produtos que saíram de fabricação;
        </p>
        <p>
          <strong>Visível no Catálogo:</strong> se marcada essa opção, seu
          produto estará visível no catálogo de produtos;
        </p>
        <p>
          <strong>Validade:</strong> este campo será utilizado na exportação da
          Carga da Balança;
        </p>
        <p>
          <strong>Produto é vendido por:</strong> selecione se este produto será
          vendido na balança por peso ou unidade, assim será etiquetado
          corretamente. Este campo será utilizado na exportação da Carga da
          Balança.
        </p>
        <h3>Seção Custos e Precificação</h3>

        <BoxImage src={Image3} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Preço de Custo (R$):</strong> informe o custo do seu produto;
        </p>
        <p>
          <strong>Frete pago na Compra (%):</strong> informe a porcentagem de
          frete paga na compra do produto;
        </p>
        <p>
          <strong>Seguro pago na Compra (%):</strong> informe a porcentagem de
          seguro pago na compra do produto;
        </p>
        <p>
          <strong>IPI (%):</strong> informe a porcentagem de IPI pago na compra
          do produto;
        </p>
        <p>
          <strong>ICMS (%):</strong> informe a porcentagem de ICMS pago na
          compra do produto;
        </p>
        <p>
          <strong>Despesas Operacionais (%):</strong> informe a porcentagem de
          despesas incidentes sobre o produto. Este campo é apenas informativo;
        </p>
        <p>
          <strong>Forma de Cálculo Automático do Custo do Produto:</strong>{" "}
          selecione a forma de cálculo que desejas efetuar individualmente por
          produto, quando importado o XML de sua nota de compra;
        </p>
        <p>
          <strong>Preço de custo com Acréscimos:</strong> o preço de custo com
          acréscimos inclui eventuais taxas e encargos de operação que irão se
          refletir no preço de venda do produto;
        </p>
        <p>
          <strong>Preço Mínimo Para Venda:</strong> defina um valor mínimo para
          a venda deste produto. Com este campo informado, o sistema não deixará
          que o produto seja vendido por um preço abaixo do mínimo. O campo
          preenchido com o valor 0 (zero) informa que não há valor mínimo;
        </p>
        <p>
          <strong>MVA Lucro (R$):</strong> informe o valor do lucro sob o preço
          do produto;
        </p>
        <p>
          <strong>MVA Lucro (%):</strong> informe o percentual do lucro sob o
          preço do produto;
        </p>
        <p>
          <strong>Preço de Venda (R$):</strong> informe o valor pelo qual o
          produto será vendido;
        </p>
        <p>
          <strong>Comissão Vendedor (R$):</strong> informe o valor de comissão
          que o vendedor receberá ao vender este produto;
        </p>
        <p>
          <strong>Comissão Vendedor (%):</strong> informe a porcentagem de
          comissão que o vendedor receberá ao vender este produto;
        </p>
        <p>
          <strong>Comissão Representação (%):</strong> informe a porcentagem de
          comissão que o representante receberá ao vender este produto;
        </p>
        <p>
          <strong>Taxa de Montagem (R$):</strong> taxas adicionais pelos
          serviços de montagem;
        </p>
        <p>
          <strong>Taxa de Montagem (%):</strong> seja em valor fixo (R$) ou em
          um percentual sobre o valor total do produto (%).
        </p>
        <p>
          <strong>Valor última compra (R$):</strong> será informado o valor da
          última compra realizada deste item, onde este campo não é alterado,
          apenas informativo.
        </p>

        <h3>Seção Informações Adicionais</h3>

        <BoxImage src={Image4} />
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <b>Observações</b>: Neste campo você pode colocar maiores informações
          referentes ao produto, como especificações técnicas. Desse modo os
          vendedores, integrantes da empresa e também os novos colaboradores
          poderão fazer as suas consultas. Além disso, estas informações poderão
          aparecer na venda impressa pelo sistema, para que o cliente tenha
          maiores detalhes sobre o produto.
        </p>
        <p>
          <BoxImage src={Image5} />
        </p>
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <p>
          <strong>Estoque para Compra:</strong> essa informação será usada pelo
          sistema para cálculos de previsão de compra de seus produtos, de
          acordo com a média de entradas e saídas do mesmo;
        </p>
        <p>
          <strong>Unidade de Estoque:</strong> selecione a unidade de estoque em
          que este produto será controlado no estoque; Exemplo: unidade, pacote,
          quilo, metro, etc;
        </p>
        <p>
          <strong>Número de Série:</strong> informe o número de série único para
          os produtos, se todas as unidades tiverem o mesmo número de série;
        </p>
        <p>
          <strong>Prateleira:</strong> informe a localização física do produto
          no depósito, conforme a prateleira;
        </p>
        <p>
          <strong>Peso Bruto (KG):</strong> informe o peso bruto do produto em
          quilo;
        </p>
        <p>
          <strong>Peso Líquido (KG):</strong> informe o peso líquido do produto
          em quilo;
        </p>
        <p>
          <strong>Tamanho/Dimensões:</strong> selecione o tamanho do produto.
          Lembre-se, essa informação já precisa estar cadastrada em seu sistema.
        </p>
        <p>
          <strong>Estoque de risco:</strong> defina qual a quantidade de risco
          para este produto no estoque. Ou seja, o sistema notificará quando
          será necessário realizar uma nova compra do produto, no relatório de
          estoque de risco;
        </p>
        <p>
          <strong>
            Não emitir alertas e permitir vendas com estoque negativo:
          </strong>{" "}
          marque esta opção se você não deseja controlar o estoque deste item, e
          o mesmo poderá ser vendido com estoque negativo;
        </p>
        <p>
          <strong>Cada unidade do produto possui um número de série:</strong>{" "}
          marque esta opção se cada unidade do produto que será vendido terá um
          número de série específico. Com isso, em cada movimentação do estoque
          será necessário informar qual o número de série que será movimentado;
        </p>
        <p>
          <strong>Permitir Quantidade Fracionada na Loja Online:</strong>{" "}
          habilite essa opção se deseja vender esse produto na Loja, onde a
          quantidade adicionada ao carrinho de compras pode ser fracionada.
          Normalmente é utilizada essa configuração para produtos vendidos a
          granel;
        </p>
        <p>
          <strong>Produto Controlado por Lote:</strong> marque essa opção caso
          seu produto seja controlado por lote;
        </p>
        <p>
          <strong>Código de Barras:</strong> neste ícone será exibida uma imagem
          do código de barras do produto, após o mesmo ser salvo;
        </p>
        <p>
          <strong>Venda por metragem quadrada (m²):</strong> selecione essa
          opção se deseja realizar vendas desse produto por metro quadrado, com
          medidas exatas de largura e altura;
        </p>
        <p>
          <strong>Limite de quantidade:</strong> permite que você faça a
          limitação de compra tanto por formas de pagamento como por quantidade
          de produtos.
        </p>

        <h3>Seção Campos Personalizados</h3>

        <BoxImage src={Image6} />

        <p>
          Crie campos personalizados como Atributos para o cadastro de produtos,
          onde é possível descrever informações específicas que ainda não foram
          adicionadas ao cadastro.
        </p>
        <p>
          Uma vez <b>salvas</b> as informações, você notará que{" "}
          <b>surgirão novas seções</b> e abas, permitindo um preenchimento ainda
          mais detalhado do referido cadastro.
        </p>
        <p>
          Ainda na <b>aba Dados,</b> verifique se abrirá duas novas seções:
          <b>Similares</b> e Valores Cashback.
        </p>
        <h3>Seção Similares</h3>
        <BoxImage src={Image7} />
        <p>
          Nesse campo você poderá optar por vincular Produtos já cadastrados ou
          Inserir dados similares avulsos.
        </p>
        <h3>Seção Valores Cashback</h3>
        <BoxImage src={Image8} />
        <p>
          Defina a porcentagem de cashback que o cliente que efetuar a compra
          desse produto terá de retorno de crédito para utilizar em novas
          compras. É possível definir porcentagens diferentes para vendas
          realizadas no <b>PDV, no Loja Online o</b>u por<b> Venda Direta</b>
          (Pedido/Orçamento).
        </p>
        <h3>Aba Fornecedores</h3>
        <p>
          Nesta aba, caso você tenha fornecedores já cadastrados, poderá
          selecionar o fornecedor padrão e demais fornecedores que já lhe
          venderam o referido produto. Será possível, ainda, incluir o último
          preço de custo e a data da última negociação.{" "}
        </p>
        <BoxImage src={Image9} />
        <h3>Aba Saldo Depósitos / Nº Série</h3>
        <p>
          Na aba<b> Saldo Depósitos / Nº Série</b>, você poderá consultar as
          quantidades do produto em cada depósito cadastrado.
        </p>
        <h3>Aba Saldo Depósitos / Nº Série</h3>
        <BoxImage src={Image10} />
        <p>
          <strong>Saldo Atual:</strong> neste campo é informado o saldo atual
          que há em cada depósito, ou seja, a diferença entre todas as entradas
          e todas as saídas de estoque;
        </p>
        <p>
          <strong>Limite de Venda por Cliente:</strong> defina um limite de
          quantas unidades desse produto poderão ser vendidas a cada cliente, em
          vendas realizadas no depósito em questão;
        </p>
        <p>
          <strong>Ponto de Ressuprimento:</strong> informe a quantidade de saldo
          de estoque que deseja que o sistema realize uma sugestão para compra.
          O cálculo é efetuado pelo sistema, levando em consideração o valor
          informado nesse campo Ponto de Ressuprimento, descontando o valor de
          Saldo Atual. Esses valores será possível ser analisado no relatório de
          Estoque Crítica e relatório de Previsão de Compra;
        </p>
        <p>
          <strong>Estoque Mínimo:</strong> defina um estoque mínimo para o
          depósito. Assim, o sistema bloqueará vendas que coloquem a quantidade
          de produtos no estoque abaixo do mínimo definido.
        </p>

        <h3>Aba Fotos</h3>
        <p>
          Na aba Fotos, você poderá adicionar imagens do produto. Para
          adicionar, clique na opção <strong>Escolher arquivo</strong> e
          localize a imagem desejada dentro do seu computador. As dimensões da
          foto são: <strong>200 × 270 pixels.</strong>
        </p>

        <BoxImage src={Image11} />

        <p>
          Ou ainda, você pode selecionar alguma das imagens carregadas
          automaticamente por nosso buscador de imagens que seleciona fotos
          disponíveis na internet de produtos com o mesmo nome.
        </p>

        <h3>Aba Fiscal</h3>
        <p>
          Na aba <strong>Fiscal</strong> você irá definir as configurações dos
          produtos que serão necessárias para faturar as vendas.
        </p>

        <BoxImage src={Image12} />
        <p>
          <strong>Grupo Tributário:</strong> selecione o grupo tributário dos
          itens. Esta informações deverá ter sido criada anteriormente no menu
          fiscal, e fará a ligação entre o produto e as Operações Fiscais;
        </p>
        <p>
          <strong>CFOP Padrão:</strong> O CFOP é composto por quatro dígitos, o
          primeiro dígito identifica o tipo da operação: se é entrada ou saída,
          se é dentro ou fora do estado ou país. Já os três últimos dígitos
          referem-se à operação que está sendo realizada. Para você selecionar,
          a CFOP é necessário ter sido informada anteriormente em alguma
          Operação Fiscal em Menu Fiscal, Submenu Operações Fiscais.
        </p>
        <p>
          <strong>Código NCM:</strong> é determinado por um único código
          numérico para uma dada mercadoria. Esse código, uma vez conhecido,
          passa a representar a própria mercadoria. Informe o NCM do produto,
          com 8 dígitos e somente números. Esta informação será utilizada na
          nota fiscal para calcular o valor aproximado de tributos conforme a
          Lei da Transparência Fiscal;
        </p>
        <p>
          <strong>Código CEST:</strong> informe o{" "}
          <strong>Código Especificador da Substituição Tributária</strong>, que
          é um código de 7 dígitos numéricos, que irá uniformizar e identificar
          as mercadorias em que incidem a Substituição Tributária e antecipação
          de ICMS;
        </p>
        <p>
          <strong>EAN – Código de Barras:</strong> informe o código de barras
          GTIN (antigo código EAN) do produto que está sendo cadastrado. Se você
          informar um código EAN não válido, o mesmo não será considerado na
          emissão da NF-e;
        </p>
        <p>
          <strong>Unidade Comercial:</strong> campo destinado a informar a
          unidade de medida do produto, utilizada para a comercialização da
          mercadoria;
        </p>
        <p>
          <strong>Origem da Mercadoria:</strong> selecione a origem da
          mercadoria que está sendo cadastrada;
        </p>
        <p>
          <strong>Produzido em Escala Não Relevante:</strong> os bens e
          mercadorias relacionados no Anexo XXVII serão considerados fabricados
          em escala industrial não relevante quando produzidos por contribuinte
          que atender, cumulativamente, as condições descritas no{" "}
          <a
            href="https://www.confaz.fazenda.gov.br/legislacao/convenios/2017/CV052_17"
            target="_blank"
            rel="noreferrer"
          >
            Convênio ICMS 52/2017 Cláusula XXIII
          </a>
          ;
        </p>
        <p>
          <strong>Fabricante:</strong> se desejar, inclua a empresa fabricante
          do referido produto;
        </p>
        <p>
          <strong>Código de Benefício Fiscal:</strong> consiste em um código,
          formado pela sigla da UF e seis dígitos sequenciais, que identificam
          benefícios fiscais ou tratamentos tributários;
        </p>
        <p>
          <strong>Situação Tributária IPI:</strong> selecione a situação do IPI
          para o produto que está sendo cadastrado. Se você selecionar uma
          situação que exige uma alíquota do imposto, abrirá outro campo para
          incluir esta informação;
        </p>
        <p>
          <strong>EX TIPI:</strong> código da Regra de Exceção da TIPI (Tabela
          de Incidência do Imposto sobre Produtos Industrializados). Ao utilizar
          a regra de exceção o item informado constará uma tributação da
          alíquota do IPI diferenciada para o grupo de NCM a qual pertence.
        </p>

        <p>
          Abaixo, na seção <strong>Configurações Fiscais Avançadas</strong>,
          você poderá definir o plano de conta ao qual esse item será vinculado
          e haverá mais checkbox que possibilitarão incluir dados tributários
          mais específicos.
        </p>

        <BoxImage src={Image13} />
        <h3>Aba Composição</h3>
        <p>
          A aba <strong>Composição</strong>, cumpre a função de reunir os itens
          que compõe o referido produto. Essa aba será utilizada em caso de
          produtos de fabricação própria ou KITs de Produtos.
        </p>

        <p>
          <strong>Localizar Depósito:</strong> selecione o depósito de onde o
          produto da composição sairá quando o produto for fabricado ou quando o
          kit for vendido;
        </p>
        <p>
          <strong>Localizar Produto ou Serviço:</strong> aqui você vai informar
          a matéria prima do produto, procure a matéria prima, selecione;
        </p>
        <p>
          <strong>Quantidade:</strong> informe a quantidade de matéria prima que
          será necessária para produzir o item. Feito isso, clique em{" "}
          <strong>adicionar</strong>. Com todas as informações preenchidas,
          clique em adicionar e você terá a seguinte tela.
        </p>

        <BoxImage src={Image14} />

        <p>
          <strong>Consumo:</strong> informe a quantidade de matéria prima que
          será necessária para produzir o item;
        </p>
        <p>
          <strong>Outros Custos:</strong> informe o valor adicional de despesa
          com o item, se necessário.
        </p>

        <p>
          Além disso, você terá duas opções que irão interferir no cadastro
          deste produto:
        </p>

        <p>
          <strong>Kit de Produtos:</strong> caso você esteja cadastrando um kit,
          marque esta opção. Quando você adicionar o kit em uma venda, será
          apresentada a composição do kit e não o próprio kit para alteração de
          quantidade e/ou preços. Caso seja um produto acabado que você produz,
          deixe esta opção desmarcada. Nesse segundo caso, será vendido o
          produto acabado e não sua composição;
        </p>
        <p>
          <strong>Calcular Custo do Produto Automaticamente:</strong> marque
          esta opção caso você deseje que o valor de custo do produto acabado ou
          kit seja calculado a partir da soma dos custos da composição
          informada. Neste caso, o campo <strong>Preço de Custo</strong> da aba{" "}
          <strong>Dados</strong> ficará bloqueado para edição, sendo ele a soma
          da sua composição.
        </p>

        <h3>Aba Qualidade</h3>
        <p>
          A aba <strong>Qualidade</strong> permitirá o cadastro dos requisitos a
          ser avaliados nos produtos produzidos pela sua empresa. Essa
          informação é predominante para o módulo PCP, para a geração de Ordem
          de Produção.
        </p>

        <BoxImage src={Image15} />

        <p>
          Para gerar a ficha de qualidade do item, deverão ser preenchidos os
          seguintes campos:
        </p>
        <ul>
          <li>
            <strong>Nível Complexidade:</strong> selecione o nível de
            complexidade para executar a ação necessária para a produção do
            produto;
          </li>
          <li>
            <strong>Nível Prioridade:</strong> selecione o nível de prioridade
            da tarefa;
          </li>
          <li>
            <strong>Descrição:</strong> faça a descrição da tarefa que precisa
            ser realizada para ser fabricado o item;
          </li>
          <li>
            <strong>Ordenação:</strong> informe a ordem em que os requisitos vão
            ser analisados;
          </li>
        </ul>

        <p>
          Após preencher todos os dados, clique em <strong>Adicionar</strong>.
          Você poderá adicionar quantas tarefas for necessário para garantir a
          qualidade do item.
        </p>

        <h3>Aba Últimas Movimentações</h3>
        <p>
          Na aba <strong>Últimas Movimentações</strong> são exibidas as
          movimentações mais recentes do produto.
        </p>

        <BoxImage src={Image16} />

        <h3>Aba Foods</h3>
        <p>
          Na aba <strong>Foods</strong>, é possível cadastrar produtos
          alimentícios controlados por tamanhos, massa, bordas e sabores.
        </p>

        <BoxImage src={Image17} />

        <p>
          <strong>Lembre-se!</strong> Você pode preencher apenas as abas e
          campos necessários à venda do seu produto.
        </p>

        <p>
          Com os campos preenchidos, clique em <strong>Salvar</strong>. Agora,
          você será direcionado à tela de listagem de produtos, onde poderá
          editar ou excluir qualquer item.
        </p>
      </Typography>
    </Container>
  );
};
export default ComoCadastrarProdutosSimplesNoSistemaERP;
