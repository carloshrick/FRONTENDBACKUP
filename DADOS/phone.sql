CREATE TABLE Smartphone (
  Nome TEXT  NOT NULL   AUTO_INCREMENT,
  IMEI NUMERIC  NULL  ,
  IMEI_2 NUMERIC  NULL  ,
  Numero_de_serie INTEGER UNSIGNED  NULL  ,
  Versao_de_software NUMERIC  NULL  ,
  Alimentacao INTEGER UNSIGNED  NULL  ,
  Licencas TEXT  NULL  ,
  Sistema_Operacional TEXT  NULL  ,
  Interface_Grafica INTEGER UNSIGNED  NULL  ,
  Biometria TEXT  NULL  ,
  Resolucao INTEGER UNSIGNED  NULL  ,
  Audio INTEGER UNSIGNED  NULL  ,
  Qualidade_Camera INTEGER UNSIGNED  NULL  ,
  Processador INTEGER UNSIGNED  NULL  ,
  Memoria_RAM INTEGER UNSIGNED  NULL  ,
  Armazenamento INTEGER UNSIGNED  NULL  ,
  Peso INTEGER UNSIGNED  NULL  ,
  Sim_Card TEXT  NULL  ,
  Dual_Sim TEXT  NULL    ,
PRIMARY KEY(Nome));




