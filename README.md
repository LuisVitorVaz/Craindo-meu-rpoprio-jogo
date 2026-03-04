# 📊 Telecom X — Análise de Evasão de Clientes (Churn)

## 📌 Visão Geral

Este projeto tem como objetivo analisar os fatores que influenciam a evasão de clientes (Churn) da empresa **Telecom X**.  
A partir de dados reais disponibilizados via API/JSON, foi realizada uma análise exploratória completa para identificar padrões de comportamento associados ao cancelamento de serviços.

Os insights obtidos neste projeto podem apoiar a equipe de Data Science no desenvolvimento de modelos preditivos e estratégias de retenção de clientes.

---

## 🎯 Objetivo do Projeto

- Entender o perfil dos clientes que cancelam o serviço
- Identificar variáveis com maior impacto no churn
- Explorar padrões de comportamento por meio de visualizações
- Preparar os dados para futuras etapas de modelagem preditiva

---

## 🛠️ Tecnologias Utilizadas

- **Python**
- **Pandas**
- **NumPy**
- **Matplotlib**
- **Seaborn**
- **Jupyter Notebook**

---

## 🔄 Etapas do Projeto

### 1️⃣ Extração de Dados (ETL)
- Coleta dos dados a partir de um arquivo JSON hospedado no GitHub
- Leitura e normalização da estrutura dos dados

### 2️⃣ Limpeza e Tratamento
- Verificação e tratamento de valores ausentes
- Remoção de registros duplicados
- Padronização de colunas e categorias
- Conversão de variáveis categóricas em formato numérico
- Criação da variável **Contas_Diarias**

### 3️⃣ Análise Exploratória de Dados (EDA)
- Análise descritiva das variáveis
- Distribuição da variável churn
- Comparação do churn por variáveis categóricas
- Análise de variáveis numéricas em relação à evasão
- Visualizações gráficas para identificação de padrões

### 4️⃣ Análises Extras
- Análise de correlação entre variáveis numéricas
- Exploração da relação entre gastos e evasão

---

## 📊 Principais Insights

- Clientes com **contratos mensais** apresentam maior taxa de churn
- Clientes com **baixo tempo de permanência** são mais propensos ao cancelamento
- Gastos mensais mais elevados mostram relação com maior evasão
- O método de pagamento influencia o comportamento de churn

---

## 📌 Recomendações

- Incentivar contratos de longo prazo com benefícios exclusivos
- Criar ações de retenção focadas nos primeiros meses do cliente
- Monitorar clientes com alto gasto mensal
- Oferecer programas de fidelidade progressivos

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/alura-cursos/challenge2-data-science.git
