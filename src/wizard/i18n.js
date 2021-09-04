import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'introDescription': 'This is a wizard for a bridge',
        'txidLabel': 'Transaction ID',
        'step1': 'Step 1',
        'step2': 'Step 2',
        'step3': 'Step 3',
        'step4': 'Step 4',
        'step5': 'Step 5',
        'step1es': 'Step 1',
        'step2es': 'Step 2',
        'step3es': 'Step 3',
        'step1esc': 'Cancel Transfer',
        'step1reg': 'Asset Registry',
        'step1sx': 'Step 1',
        'step2sx': 'Step 2',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Finish',
        'nextButtonText': 'Next',
        'backButtonText': 'Back',
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': 'Welcome to the official Syscoin to NEVM Bridge wizard!',
        'step1Description': '<em>This is a wizard for a bridge for users of Syscoin to walk trustlessly over to NEVM without any counterparties.</em><br/><br/> The smart contracts can be found here:',
        'step1SXHead': 'Welcome to the official Syscoin to SYSX Wizard',
        'step1SXDescription': '<em>This is a mechanism for users of Syscoin to convert SYS into SYSX (SPT version of SYS) so they can later use the bridge or Z-DAG functionality with their SYSX.</em>',
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': 'Welcome to the official NEVM to Syscoin Bridge wizard!',
        'step1ESDescription': '<p><em>This is a wizard for a bridge for tokens on NEVM to move to Syscoin trustlessly.</em></p> <p>An SPV proof of the NEVM burn transaction is required to move back to Syscoin.</p><p> <strong>Please enter details about which asset to move back to Syscoin:</strong></p> Enter <code>1965866356</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID of the Asset token you are moving back to Syscoin.',
        'step1ESFromAccountLabel': 'NEVM account',
        'step1ESEnterFromAccount': 'Enter your NEVM token address...',
        'step1ESWitnessAddressLabel': 'Syscoin Address',
        'step1ESEnterWitnessAddress': 'Enter receiving Syscoin address...',
        'step1ESButton': 'Burn',
        'step1ESCHead': 'Cancel NEVM To Syscoin Transaction',
        'step1ESCDescription': '<p><em>Users burning tokens on Syscoin to walk to NEVM over the bridge have 50000 blocks to complete the transfer (around 3 months).</strong></p>',
        'step1ESCSearchBox': 'Enter NEVM transaction ID of ERC20 burn...',
        'step1ESCWrongTransaction': 'We had trouble finding the Bridge ID in this transaction please ensure the TXID represents an NEVM Burn transaction for the Syscoin Bridge...',
        'step1ESCExists': 'The Syscoin Mint transaction associated with this NEVM Burn already exists!',
        'step1ESCCancelButton': 'Cancel Transfer',
        'step1ESCTimeoutButton': 'Complete Cancellation',
        'step1ESCWaitOneHr': 'Bridge Transfer cancellation has been requested, please wait for an hour before proceeding to timing out on the next step',
        'step1ESCCancelRequested': 'Bridge Transfer cancellation has been requested and is able to complete to get your ERC20 back. Please proceed with the next step',
        'step1ESCCancelChallenged': 'Bridge Transfer cancellation request has been challenged! Challenger won deposit and the request has been rejected',
        'step1ESCWaitOneHalfWeek': 'Bridge Transfer cancellation cannot be initiated as you must wait atleast 1.5 weeks from the time of the burn to cancel',
        'step1ESCOk': 'Bridge Transfer is eligible for cancellation',
        'step1ESCCancelOk': 'Bridge Transfer cancellation request is complete. ERC20 tokens as well as deposit has been refunded',
        'step1ESCUnknown': 'Bridge Transfer is in an unknown state',
        'step1ESCTimestamp': 'Last Timestamp',
        'step1ESCValue': 'Transfer Value',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step1RegHead': 'Asset Registry',
        'step1RegDescription': 'In order to use the bridge from NEVM->SYS, the Asset (SPT) needs to be registered in the ERC20Manager so it knows the correlation between the SPT and the ERC20 token contract associated with it. Because of this, the contract must be sent a valid Syscoin transaction of when the SPT was updated with the contract field populated. Anyone can send this information to the contract by clicking on the Update Registry below once you have entered the Syscoin TXID of the SPT Transaction. Note: Gas fees in NEVM apply. You may also search for existing registry entries by entering the SPT Guid. The contract as well as the Syscoin block height (in which the SPT transaction was mined) will be given to the user.',
        'step1RegWrongAsset':  'Could not find in Asset Registry, try a different Asset Guid',
        'step1RegEnterAssetTx': 'Enter the Transaction ID of the Syscoin Transaction where the contract field was last updated for an SPT',
        'step1RegStatusSuccess': 'SPV Proofs were sucessfully saved! Proceed with NEVM transaction now...',
        'step1RegUpdateButton': 'Update Registry',
        'step1RegSearchBox': 'Search Registry',
        'step2ESHead': '<em className="step">Step 2:</em> Build a Syscoin Mint transaction',
        'step2ESDescription': 'Please enter the Transaction ID from your NEVM burn transaction below if it is not already auto-filled.<br/> Click Generate to create the raw unsigned transaction before proceeding to the next step. Note to ensure that the burn transaction on NEVM was adequately settled, you will have to wait atleast about 1 hour before you are able to proceed with this step and create the mint transaction on Syscoin.',
        'step2ESEnterTxid': 'Enter NEVM Transaction Hash (Txid)...',
        'step2ESTxid': 'A valid NEVM TXID is required',
        'step2ESInvalidProof': 'Invalid Transaction Proof - Error: ',
        'step2Head': '<em className="step">Step 2:</em> Build a Syscoin Burn transaction',
        'step2Description': 'Please fill out asset, amount, address and then click Burn to send the transaction via Pali before proceeding to the next step. Enter <code>1965866356</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step2Asset': 'A valid Syscoin Asset GUID is required',
        'step2AssetLabel': 'Asset GUID',
        'step2RawTx': 'A valid Syscoin transaction is required',
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': 'A valid amount is required',
        'step2EthAddress': 'A valid NEVM address is required',
        'step2EthAddressLabel': 'NEVM Address',
        'step2FundingAddress': 'A valid Syscoin address is required',
        'step2EnterAsset': 'Enter Asset GUID here if applicable...',
        'step2EnterAmount': 'Amount to transfer...',
        'step2AmountLabel': 'Amount',
        'step2EnterEthAddress': 'NEVM address of recipient...',
        'step2Button': "Burn",
        'step2InstallPali': 'Please install Pali to submit SPV proof to Syscoin...',
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step3Head':  '<em className="step">Step 3:</em> Complete!',
        'step3Description': 'The button below will get the Syscoin Transaction SPV proof from Syscoin Core.',
        'step3Button': 'Get SPV Proofs',
        'step3ButtonEnter': 'Please get SPV Proofs before proceeding',
        'step3SbStatusSuccess': 'SPV Proofs were sucessfully saved! Please proceed to click on the "Next" button below',
        'step3ESHead': '<em className="step">Step 3:</em> Complete!',
        'step3ESDescription': '<strong>Transaction was successfully completed.</strong><br/> You now can use your Syscoin or Syscoin Asset through the Syscoin network.<br/> You can view your transaction here: ',
        'step4Head': '<em className="step">Step 4:</em> Submit SPV Proof to NEVM',
        'step4Description': 'The button below will submit the SPV proofs to the relay contract.',
        'step4Button': 'Submit SPV Proofs',
        'step4InstallMetamask': 'Please install Metamask to submit SPV proof to NEVM...',
        'step4LoginMetamask': 'Please login to Metamask and try again...',
        'step4AuthMetamask': 'Authorizing with Metamask...',
        'step4InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step4AuthAllowanceMetamask': 'Authorizing token allowance with Metamask...',
        'step4Success': 'Success!',
        'step4PleaseWait': 'Please wait while the transaction is being mined...',
        'step4ReceiptStatus': 'Status',
        'step4ReceiptTxHash': 'Transaction ID',
        'step4ReceiptTxIndex': 'Transaction Index',
        'step4ReceiptFrom': 'From',
        'step4ReceiptTo': 'To',
        'step4ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step4ReceiptBlockhash': 'Blockhash',  
        'step4ReceiptBlocknumber': 'Block Number',  
        'step4ReceiptTotalGas': 'Cumulative Gas Used',  
        'step4ReceiptGas': 'Gas Used',
        'step4ReceiptConfirmations': 'Confirmations',
        'step4Download': 'Download Receipt Log',
        'step4ErrorEventCheckLog': 'Error! Cannot find TokenUnfreeze event in Transaction Receipt. Please check the Receipt Log for more details',
        'step5Head': '<em className="step">Step 5:</em> Complete!',
        'step5Description': 'Transaction was successfully completed. You now can use your Syscoin or Syscoin Asset on the NEVM network through an ERC20. You can view your transaction here: '
      }
    },
    es: {
      translations: {
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': 'Bienvenido al asistente oficial de la pasarela desde Syscoin hacia NEVM!',
        'introDescription': 'Este es el asistente de la pasarela',
        'txidLabel': 'ID de la Transacción',
        'step1': 'Paso 1',
        'step2': 'Paso 2',
        'step3': 'Paso 3',
        'step4': 'Paso 4',
        'step5': 'Paso 5',
        'step1es': 'Paso 1',
        'step2es': 'Paso 2',
        'step3es': 'Paso 3',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Finalizar',
        'nextButtonText': 'Siguiente',
        'backButtonText': 'Atras',
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': 'Bienvenido al asistente oficial de la pasarela desde Syscoin hacia NEVM!',
        'step1Description': 'Este es el asistente de la pasarela de Syscoin para que sus usuarios puedan interactuar sin preocupación con NEVM y sin contrapartidas. El concepto de Super Bloques se usa para agregar bloques cada hora y publicar el hash raíz Merkle del bloque agregado en un contrato de NEVM.  La prueba SPV del Super Bloque así como la transacción de Syscoin producida cuando se usa la pasarela ayuda a desbloquear los tokens basados en ERC20 que se encuentran conectados y participando en los activos de Syscoin. Pulse en el botón "Siguiente" para continuar. El contrato inteligente se puede encontrar aquí:',
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': 'Bienvenido al asistente la pasarela oficial desde NEVM hacia Syscoin!',
        'step1ESDescription': 'Esto es un asistente para los usuarios de la pasarela de NEVM que previamente la hayan usado desde Syscoin y quieran volver atrás sin preocupación. Una prueba SPV de la ejecución (quemado) de la transacción de NEVM es necesaria para volver a Syscoin. Para usar el activo SYSX the NEVM introduzca introduzca "1965866356" para GUID, si por el contrario esta moviendo a Syscoin otro activo introduzca su GUID del activo que quiera mover.',
        'step1ESFromAccountLabel': 'La cuenta NEVM',
        'step1ESEnterFromAccount': 'Introduzca la direccion de su activo de NEVM..',
        'step1ESWitnessAddressLabel': 'Direccion de Syscoin',
        'step1ESEnterWitnessAddress': 'IntroduzCa la cuenta para la recepción de Syscoin...',
        'step1ESButton': 'Burn',
        'step1ESCDescription': '<p><em>Users burning tokens on Syscoin to walk to NEVM over the bridge have 50000 blocks to complete the transfer (around 3 months).</strong></p>',
        'step1ESCSearchBox': 'Enter NEVM transaction ID of ERC20 burn...',
        'step1ESCWrongTransaction': 'We had trouble finding the Bridge ID in this transaction please ensure the TXID represents an NEVM Burn transaction for the Syscoin Bridge...',
        'step1ESCExists': 'The Syscoin Mint transaction associated with this NEVM Burn already exists!',
        'step1ESCCancelButton': 'Cancel Transfer',
        'step1ESCTimeoutButton': 'Complete Cancellation',
        'step1ESCWaitOneHr': 'Bridge Transfer cancellation has been requested, please wait for an hour before proceeding to timing out on the next step',
        'step1ESCCancelRequested': 'Bridge Transfer cancellation has been requested and is able to complete to get your ERC20 back. Please proceed with the next step',
        'step1ESCCancelChallenged': 'Bridge Transfer cancellation request has been challenged! Challenger won deposit and the request has been rejected',
        'step1ESCWaitOneHalfWeek': 'Bridge Transfer cancellation cannot be initiated as you must wait atleast 1.5 weeks from the time of the burn to cancel',
        'step1ESCOk': 'Bridge Transfer is eligible for cancellation',
        'step1ESCCancelOk': 'Bridge Transfer cancellation request is complete. ERC20 tokens as well as deposit has been refunded',
        'step1ESCUnknown': 'Bridge Transfer is in an unknown state',
        'step1ESCTimestamp': 'Last Timestamp',
        'step1ESCValue': 'Transfer Value',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step2ESHead': 'Paso 2: Construir una nueva transacción Syscoin Mint',
        'step2ESDescription': 'Introduzca el ID the la transacción the quemado the NEVM abajo, si no se ha rellenado automáticamente. Pulse en "Generar" para crear la nueva transacción sin firmar antes de seguir con el siguiente paso.',
        'step2ESEnterTxid': 'Introduzca el hash (Txid) de la transacción de NEVM...',
        'step2ESTxid': 'Se necesita un TXID de NEVM válido',
        'step2ESInvalidProof': 'Prueba de transacción inválida - Error: ',
        'step2Head': 'Paso 2: Construir una nueva transacción de quemado de Syscoin',
        'step2Description': 'Please fill out asset, amount, address and then click Burn to send the transaction via Pali before proceeding to the next step. Enter <code>1965866356</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step2Asset': 'Se necesita un GUID valido de un activo de Syscoin',
        'step2AssetLabel': 'Activo GUID',
        'step2RawTx': 'Se necesita una transacción de Syscoin valida',
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': 'Se necesita una cantidad valida',
        'step2EthAddress': 'Se necesita una direccion de NEVM valida',
        'step2EthAddressLabel': 'Direccion de NEVM',
        'step2FundingAddress': 'Se necesita una direccion de Syscoin valida',
        'step2EnterAsset': 'Introduzca el GUID de activo si aplica...',
        'step2EnterAmount': 'Cantidad a transferir...',
        'step2AmountLabel': 'Cantidad',
        'step2EnterEthAddress': 'Direccion de recepción de NEVM...',
        'step2Button': "Burn",
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step4InstallPali': 'Por favor instale Pali para enviar la pruebas SPV a Syscoin... ',
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step3Head': 'Paso 3: Obtenga la prueba SPV para pasar a NEVM',
        'step3Description': 'El siguiente botón obtendrá la prueba SPV de la transacción desde Syscoin Core y después la prueba SPV del Super Bloque desde de Syscoin. Ambos son necesarios continuar con el siguiente paso, completar una transacción en NEVM contra el contrato del Super Bloque',
        'step3Button': 'Obtén las pruebas SPV',
        'step3ButtonEnter': 'Obtenga las pruebas SPV antes de continuar',
        'step3SbStatusSuccess': 'Las pruebas SPV han sido guardadas con éxito! Pulse el botón "Siguiente"',
        'step3ESHead': 'Paso 3: Completado!',
        'step3ESDescription': 'La transacción se completo con éxito. Ahora puede usar tus Syscoin o tus activos Syscoin a través de la red Syscoin. Puede ver su transacción aquí: ',
        'step4Head': 'Paso 4: Enviar la prueba SPV a NEVM',
        'step4Description': 'El botón de abajo enviará las pruebas SPV al contrato del Super Bloque.',
        'step4Button': 'Enviar las Pruebas SPV',
        'step4InstallMetamask': 'Por favor instale Metamask para enviar la pruebas SPV a NEVM... ',
        'step4LoginMetamask': 'Abra session en Metamask e inténtelo de nuevo...',
        'step4AuthMetamask': 'Autorizando con Metamask...',
        'step4InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step4AuthAllowanceMetamask': 'Autorizando con Metamask...',
        'step4Success': 'Conseguido!',
        'step4PleaseWait': 'Por favor espere mientras la transacción es minada...',
        'step4ReceiptStatus': 'Estado',
        'step4ReceiptTxHash': 'ID de la Transacción',
        'step4ReceiptTxIndex': 'Indice de la Transacción',
        'step4ReceiptFrom': 'Desde',
        'step4ReceiptTo': 'hacia',
        'step4ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step4ReceiptBlockhash': 'Blockhash',  
        'step4ReceiptBlocknumber': 'Numero de bloque',  
        'step4ReceiptTotalGas': 'Total acumulado del Gas usado',  
        'step4ReceiptGas': 'Gas usado',
        'step4ReceiptConfirmations': 'Conformaciones',
        'step4Download': 'Descarga del registro de recibos',
        'step4ErrorEventCheckLog': 'Error! No se encuentra el TokenUnfreeze evento en el recibo de la transacción. Compruebe el registro de recibos para mas detalles',
        'step5Head': 'Paso 5: Completado!',
        'step5Description': 'La transacción se completo con éxito. Ahora puedes usar tus Syscoins o tus Syscoin Assets en la red the NEVM a través de un ERC20. Puedes ver tu transacción aquí: '
      }
    },
    fr: {
      translations: {
        'tabGeneral':'General',
        'tabAdvanced':'Advanced',
        'introHead': "Bienvenue à l'assistant officiel d'installation du pont entre Syscoin et NEVM",
        'introDescription': "Ceci eat un assistant d'installation pour un pont",
        'txidLabel': "Un Identifiant de Transaction 'TXID' Syscoin valide est requis",
        'step1': "Étape 1",
        'step2': "Étape 2",
        'step3': "Étape 3",
        'step4': "Étape 4",
        'step5': "Étape 5",
        'step1es': "Étape 1",
        'step2es': "Étape 2",
        'step3es': "Étape 3",
        'repoUrl': "https://github.com/syscoin/sysethereum-contracts",
        'nextTextOnFinalActionStep': "Compléter",
        'nextButtonText': "Suivant",
        'backButtonText': "Précédent",
        'stepUseMainnet': 'Please configure your metamask to connect to the correct network',
        'step1Head': "Bienvenue à l'assistant officiel d'installation du pont entre Syscoin et NEVM!",
        'step1Description': "Ceci est un assistant d'installation du Pont Syscoin. Le pont permet aux utilisateurs de Syscoin de croiser au protocole d'NEVM sans contrepartie, de manière 'trustless'. Les Superblocs sont utilisés pour agréger des blocs a chaque heure et postent le hachage de racine de Merkle du bloc agrégé, utilisant un contrat NEVM. Lors du franchissement du pont, une preuve du SPV du superbloc et de la transaction Syscoin permet de déverrouiller des jetons sur un jeton ERC20 connecté à Syscoin et aux actifs Syscoin participants. Veuillez cliquer sur le bouton Suivant ci-dessous pour continuer. Les contrats intelligents peuvent être trouvés ici:", 
        'step1Faucet': 'Generating a transaction on the NEVM requires a small amount of gas. Use the faucet to get some here:',
        'step1ESHead': "Bienvenue à l'assistant d'installation officiel du pont entre  NEVM et Syscoin",
        'step1ESDescription': "Ceci est un assistant d'installation destiné aux utilisateurs d'NEVM ayant déjà franchi le pont Syscoin vers NEVM et a l'intention de revenir a Syscoin, de manière 'trustless'. Une preuve SPV (l'identifiant de transaction de gravure) est requise pour revenir à Syscoin. Veuillez entrer des détails sur  retourner à Syscoin. Entrez '1965866356' pour le GUID. Sinon, entrez le GUID du jeton qui retourne à Syscoin.",
        'step1ESFromAccountLabel': "Compte NEVM",
        'step1ESEnterFromAccount': "Entrez l'adresse du jeton NEVM...",
        'step1ESWitnessAddressLabel': "Adresse Syscoin",
        'step1ESEnterWitnessAddress': "Entrez l'adresse de réception Syscoin...",
        'step1ESButton': "Burn",
        'step1ESCDescription': '<p><em>Users burning tokens on Syscoin to walk to NEVM over the bridge have 50000 blocks to complete the transfer (around 3 months).</strong></p>',
        'step1ESCSearchBox': 'Enter NEVM transaction ID of ERC20 burn...',
        'step1ESCWrongTransaction': 'We had trouble finding the Bridge ID in this transaction please ensure the TXID represents an NEVM Burn transaction for the Syscoin Bridge...',
        'step1ESCExists': 'The Syscoin Mint transaction associated with this NEVM Burn already exists!',
        'step1ESCCancelButton': 'Cancel Transfer',
        'step1ESCTimeoutButton': 'Complete Cancellation',
        'step1ESCWaitOneHr': 'Bridge Transfer cancellation has been requested, please wait for an hour before proceeding to timing out on the next step',
        'step1ESCCancelRequested': 'Bridge Transfer cancellation has been requested and is able to complete to get your ERC20 back. Please proceed with the next step',
        'step1ESCCancelChallenged': 'Bridge Transfer cancellation request has been challenged! Challenger won deposit and the request has been rejected',
        'step1ESCWaitOneHalfWeek': 'Bridge Transfer cancellation cannot be initiated as you must wait atleast 1.5 weeks from the time of the burn to cancel',
        'step1ESCOk': 'Bridge Transfer is eligible for cancellation',
        'step1ESCCancelOk': 'Bridge Transfer cancellation request is complete. ERC20 tokens as well as deposit has been refunded',
        'step1ESCUnknown': 'Bridge Transfer is in an unknown state',
        'step1ESCTimestamp': 'Last Timestamp',
        'step1ESCValue': 'Transfer Value',
        'step1ESCERC': 'ERC20 Token Contract',
        'step1ESCFreezer': 'ERC20 Token Account',
        'step1ESCSPT': 'Syscoin SPT',
        'step1ESCStatus': 'Bridge Transfer Status',
        'step2ESHead': "Etape 2: créez une transaction Syscoin Mint",
        'step2ESDescription': "S'il n'est pas déjà rempli automatiquement, veuillez saisir l'identifiant de transaction de gravure NEVM ci-dessous. Avant de passer à l'étape suivante, cliquez sur 'Générer' pour créer la transaction brute non signée.",
        'step2ESEnterTxid': "Entrez le Hash de Transaction NEVM (Txid)...",
        'step2ESTxid': "Un TXID NEVM valide est requis",
        'step2ESInvalidProof': "Preuve de transaction invalide - Erreur: ",
        'step2Head': "Étape 2: Générez une transaction Syscoin",
        'step2Description': 'Please fill out asset, amount, address and then click Burn to send the transaction via Pali before proceeding to the next step. Enter <code>1965866356</code> for <code className="blue">Asset GUID</code> if moving Syscoin (SYSX) over otherwise enter the GUID you are moving to NEVM.',
        'step2Asset': "Un GUID valide de l'actif Syscoin est requis.",
        'step2AssetLabel': "Actif GUID",
        'step2RawTx': "Une transaction brute Syscoin valide est requise",
        'step2TxLabel': "Syscoin Burn TXID",
        'step2Amount': "Un montant valide est requis",
        'step2EthAddress': "Une adresse NEVM valide est requise",
        'step2EthAddressLabel': "Adresse NEVM",
        'step2FundingAddress': "Une adresse Syscoin valide est requise",
        'step2EnterAsset': "Si le cas échéant, Entrez le GUID de l'actif ici...",
        'step2EnterAmount': "Montant à transférer...",
        'step2AmountLabel': "Montant",
        'step2EnterEthAddress': "Adresse NEVM du destinataire...",
        'step2Button': "Burn",
        'step2EnterTx': 'Enter Syscoin Burn TXID...',
        'step4InstallPali': "SVP, veuillez installer Pali pour soumettre une épreuve SPV à Syscoin...",
        'step2SelectPaliAccount': 'Please select an account in Pali to use for submitting an SPV proof to Syscoin...',
        'step3Head': "Étape 3: Obtenir la preuve SPV pour passer à NEVM",
        'step3Description': "Le bouton ci-dessous obtiendra la preuve Syscoin Transaction SPV de Syscoin Core.",
        'step3Button': "Obtenir les preuves SPV",
        'step3ButtonEnter': "S'il vous plaît obtenir les preuves SPV avant de procéder",
        'step3SbStatusSuccess': "Les preuves SPV ont été sauvegardées avec succès! Veuillez cliquer sur le bouton 'Suivant' ci-dessous.",
        'step3ESHead': "Étape 3: Terminé!",
        'step3ESDescription': "La transaction a été complétée avec succès. Vous pouvez maintenant utiliser votre actif Syscoin ou Syscoin via le réseau Syscoin. Vous pouvez voir votre transaction ici:",
        'step4Head': "Étape 4: Soumettez la preuve SPV à NEVM",
        'step4Description': "Le bouton ci-dessous soumettra les épreuves SPV au contrat relay.",
        'step4Button': "Soumettez des preuves SPV",
        'step4InstallMetamask': "SVP, veuillez installer Metamask pour soumettre une épreuve SPV à NEVM...",
        'step4LoginMetamask': "Veuillez vous connecter à Metamask et réessayer...",
        'step4AuthMetamask': "Autoriser avec Metamask...",
        'step4InsufficientTokenBalance': 'Insufficient token balance to cover the request...',
        'step4AuthAllowanceMetamask': "Autoriser avec Metamask...",
        'step4Success': "Succès!",
        'step4PleaseWait': "Veuillez patienter pendant que la transaction est en cours d'exploration...",
        'step4ReceiptStatus': "Statut",
        'step4ReceiptTxHash': "Identifiant de transaction",
        'step4ReceiptTxIndex': "Indice de transaction",
        'step4ReceiptFrom': "De",
        'step4ReceiptTo': "À",
        'step4ErrorEVMCheckLog': 'Transaction was rejected by the EVM! Please check the transaction receipt for more details',
        'step4ReceiptBlockhash': "Blockhash",  
        'step4ReceiptBlocknumber': "Numéro de bloc",  
        'step4ReceiptTotalGas': "'Gas' cumulé utilisé",  
        'step4ReceiptGas': "'Gas' Utilisé",
        'step4ReceiptConfirmations': "Confirmations",
        'step4Download': "Télécharger le journal de réception",
        'step4ErrorEventCheckLog': "Erreur! Impossible de trouver l'événement TokenUnfreeze dans le reçu de transaction. S'il vous plaît consulter le journal de réception pour plus de détails",
        'step5Head': "Étape 5: Complète!",
        'step5Description': "La transaction a été complétée avec succès. Vous pouvez maintenant utiliser votre actif Syscoin ou Syscoin sur le réseau NEVM via un ERC20. Vous pouvez voir votre transaction ici: "
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
