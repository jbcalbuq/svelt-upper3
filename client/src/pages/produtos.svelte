<script>
  import { onMount } from 'svelte';
  import SvelteTable from "../components/DataTable/Table.svelte";
  import DbAction from '../components/main/DbActions.svelte'
  export let router
  export let currentRoute
  let parsedRoute = JSON.stringify(currentRoute,false,2)  

  function insert(){
    console.log("insert");
  }
  function edit(){
    console.log("edit");
  }  


// define some data...
  const columns = [
    {
      key: "ID",
      title: "ID",
      value: v => v.ID,
      sortable: true,
      headerClass: 'text-left'
    },
    {
      key: "Nome",
      title: "Nome",
      value: v => v.Nome,
      sortable: true,
    },
    {
      key: "Unidade",
      title: "cod.",
      value: v => v.Unidade,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "unidadeDesc",
      title: "Unidade",
      value: v => v.UnidadeDesc,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "estoque",
      title: "estoque",
      value: v => v.Estoque,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "custoMedio",
      title: "Cst Médio",
      value: v => v.CustoMedio,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "precoCusto",
      title: "Pr Custo",
      value: v => v.PrecoCusto,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "distribuidor",
      title: "cod.",
      value: v => v.Distribuidor,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "distribuidorDesc",
      title: "Distribuidor",
      value: v => v.DistribuidorDesc,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "codigoBarra",
      title: "Cod. Barras",
      value: v => v.CodigoBarra,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "reposicao",
      title: "Reposição",
      value: v => v.Reposicao,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "ncm",
      title: "NCM",
      value: v => v.Ncm,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "cas",
      title: "CAS",
      value: v => v.Cas,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    {
      key: "dcb",
      title: "DCB",
      value: v => v.Dcb,
      sortable: true,
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    }
  ];
  var rows = [];
    /*
    {id:1, first_name:"Marilyn", last_name: "Monroe"},
    {id:2, first_name:"Abraham", last_name: "Lincoln"},
    {id:3, first_name:"Mother", last_name: "Teresa"},
    {id:4, first_name:"John F.", last_name: "Kennedy"},
    {id:5, first_name:"Martin Luther", last_name: "King"},
    {id:6, first_name:"Nelson", last_name: "Mandela"},
    {id:7, first_name:"Winston", last_name: "Churchill"},
    {id:8, first_name:"Donald", last_name: "Trump"},
    {id:9, first_name:"Bill", last_name: "Gates"},
    {id:10, first_name:"Muhammad", last_name: "Ali"},
    {id:11, first_name:"Mahatma", last_name: "Gandhi"},
    {id:12, first_name:"Margaret", last_name: "Thatcher"},
    {id:13, first_name:"Christopher", last_name: "Columbus"},
    {id:14, first_name:"Charles", last_name: "Darwin"},
    {id:15, first_name:"Elvis", last_name: "Presley"},
    {id:16, first_name:"Albert", last_name: "Einstein"},
    {id:17, first_name:"Paul", last_name: "McCartney"},
    {id:18, first_name:"Queen", last_name: "Victoria"},
    {id:19, first_name:"Pope", last_name: "Francis"},
    // etc...
  ];*/
/*
fetch("http://localhost:9000/produto").then(function(response) {
  rows = response;
  console.log(response);
});
*/

var url = new URL("http://localhost:9000/produto");

onMount(async () => {
 await fetch(url).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return  response.json().then(function(json) {
      rows = json;
      console.log(json)
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});
	});

</script>

<style>
  h1{
    font-size: 22px; 
    font-weight: bold;
    font-style: italic;
    color: azure;
  }

  .panel {
    background-color: rgb(70, 69, 69);
    border-radius: 8px;
  }

  .panel-block {
    padding: 0;
  }

 .panel-heading {
   background-color: rgb(49, 49, 49);
 }

</style>

<nav class="panel is-primary">
 <h1>
  <div class="panel-heading">
  <h1>Manutenção de Produtos</h1> 
    <DbAction insert={insert} edit={edit}/>
  </div>
    </h1>
  <div class="panel-block">
    <SvelteTable columns={columns} rows={rows}></SvelteTable>
  </div>
</nav>  