# Gestão Inteligente de Frotas

## Problemas Identificados

-   Principais dores:
   -   Alto custo com combustível devido à gestão ineficiente e condução inadequada
   -   Custos elevados com manutenção
       -   Falta de acompanhamento adequado leva a desgastes prematuros e falhas inesperadas
       -   Resulta em inatividade da frota
   -   Cadastro manual de informações
-   Outras empresas enfrentam as mesmas dores

## Solução Proposta

-   Implementação de boa gestão de frota (baseado em estudos da CNT)
-   Componentes da solução:
   -   Painel dashboard WEB
   -   Dispositivo de coleta de dados veicular (Bluetooth)
   -   Dispositivo móvel com Bluetooth e WiFi conectados constantemente

## Limitações das Soluções Atuais

-   Falham em transformar dados brutos dos veículos em conhecimento prático e estratégico
-   Mantêm processos manuais de cadastro (possibilitando erros humanos)

## Perguntas a Serem Investigadas

-   O dispositivo móvel armazena dados localmente quando sem WiFi?
-   Existe perda de dados quando o dispositivo de coleta perde conexão temporária com o dispositivo móvel?
-   A otimização de rotas será desenvolvida internamente ou utilizará integração com serviços terceiros (ex: Waze)?

# Sobre o Projeto

## Visão Geral

Desenvolvimento de uma plataforma digital inteligente e abrangente que integra:

-   Hardware embarcado nos veículos para coleta de dados em tempo real
-   Aplicativos móveis intuitivos para condutores e gestores de frotas

## Objetivo Central

Fornecer às empresas uma ferramenta poderosa e completa para:

-   Gestão eficiente de frotas
-   Redução de custos operacionais (combustível, manutenção)
-   Otimização da eficiência logística
-   Aumento da disponibilidade da frota
-   Elevação da segurança dos condutores

## Etapas do Projeto

1. Desenvolvimento do protótipo funcional (MVP)
   2. Plataforma WEB (Devix)
   3. Plataforma MOBILE (Devix)
   4. Dispositivo de coleta de dados veicular (SENAI)
5. Desenvolvimento do painel de gestão completo (Devix)
6. Desenvolvimento de modelos avançados de análise preditiva (SENAI)

7. Testes em ambiente real
8. Ajustes iterativos (refere-se a um processo cíclico de melhoria continua da plataforma)
9. Melhoria contínua
10. Capacitação e suporte aos usuários

## Tecnologias Utilizadas

-   Dispositivos de leitura veicular (OBD2)
-   Inteligência Artificial
-   Machine Learning
-   Análise preditiva de dados
-   Comunicação bidirecional (dispositivos moveis e a plataforma digital, ambos enviando e recebendo informações)

## Expectativas do Projeto

Auxiliar empresas capixabas a superar desafios como:

-   Controle inadequado do consumo de combustível
-   Ausência de práticas de manutenção preventiva
-   Baixa rastreabilidade de informações operacionais
-   Dificuldade em garantir a segurança dos condutores

## Considerações Técnicas

-   Implementação de sistema de filas para processamento de dados em tempo real
-   Foco em escalabilidade, replicabilidade e adaptabilidade
  - Adaptabilidade e replicabilidade: para poder adaptar e replicar as demais empresas que querem esse sistema
  - Escalabilidade: Para adicionar novas funcionalidades ou conectar com sistemas internos
- Implementação e treinamento de modelos (com dados reais) para a prevenção de falhas dos veículos

## Funcionalidades Principais

1. Controle automatizado de abastecimento

   - Monitoramento preciso do consumo de combustível
   - Identificação de fraudes

2. Controle de comportamento de risco na condução

   - Análise em tempo real
   - Feedback para aprimoramento da segurança

1. Previsão de falhas mecânicas (definir quais)

   - Antecipação de necessidades de manutenção
   - Redução de frotas ociosas

4. Otimização dinâmica e inteligente de rotas

   - Consideração do tráfego em tempo real
   - Criação de trajetos mais eficientes

5. Gestão eficiente da documentação

   - Captura automática pelo dispositivo de coleta
   - Redução de erros humanos

6. Integração com outros sistemas da empresa
   - Otimização de tempo dos funcionários

## Sobre a Manutenção Preventiva

### Opção A: Verificações Simples

-   Implementação de verificações em SQL ou cronjobs
-   Exemplo: "Trocar óleo a cada 10.000km ou 6 meses"

### Opção B: Machine Learning Supervisionado

-   Treinamento de modelos com histórico real
-   Exemplo: Detecção de padrões de falha no sistema de freio baseado em:
   -   Temperatura anormal
   -   Padrão de uso
   -   Desgaste
 ---
## Questionamentos

-   Existe perda de dados quando o dispositivo de coleta perde conexão temporária com o dispositivo móvel?
-   A otimização de rotas será desenvolvida internamente ou utilizará integração com serviços terceiros (ex: Waze)?
### Implementação de algoritmos de analise preditiva
- Restrições na analise preditiva de falhas mecânicas
	- Falhas mecânicas que eles esperam fazer a predição
	 - Perguntar se possuem documento de problemas recorrentes
	- Para os problemas recorrentes ou que eles esperam prever, perguntar se possuem um mapeamento (ou documento) de correlações, causas ou sinais que esses problemas irão ocorrer
- Restrições na analise de consumo de combustível
	- Perguntar sobre desvios no consumo de combustível
		- Fraudes, desvios, etc.
		- Casos que já ocorreram, quando acontecem
			- Exemplo: no abastecimento, desvio de rota, etc.
		- Quais informações eles esperam correlacionar
			- Recibo de abastecimento
			* Dado de consumo do Hardware
			* Consumo médio do veiculo
* Restrições na detecção do comportamento de risco
* Na seção 5.2 - Justificativa é citado o seguinte trecho, "a otimização dinâmica e inteligente de rotas, que considera o trafego em tempo real e outras variáveis para criar trajetos mais eficientes."
