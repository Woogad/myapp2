import img1 from "./EOS-1D-X_9856-e1567152711449.png"
function App() {
  return (
    <div>
      <header>
        <div class="flex justify-end mr-36 mt-2">
          <img src="https://www.rbac.ac.th/wp-content/uploads/2022/03/RBACCNicon2-01.png" alt="img" />
        </div>
        <div class="grid grid-flow-col mx-10">
          <div id="grid 1">
            <img class="w-1/3 ml-32" src="https://www.rbac.ac.th/wp-content/uploads/2022/01/RBAC-l1-01-01.png" />
          </div>
          <div id="gird 2">
            <div id="grid 3" class="grid grid-flow-col mt-6 mr-32">
              <button>ทำไมต้อง RBAC</button>
              <button>คณะ/สาขา</button>
              <button>บริการ RBAC</button>
              <button>เกี่ยวกับ RBAC</button>
            </div>
          </div>
        </div>
        <div class="mt-6 w-full">
          <img src={img1} alt="img1" />
        </div>
      </header>
    </div>
  );
}

export default App;
