class InventoryService {
    getInventory() {
      const inventory = localStorage.getItem('inventory');
      return inventory ? JSON.parse(inventory) : [];
    }
  
    saveInventory(inventory) {
      localStorage.setItem('inventory', JSON.stringify(inventory));
    }
  
    addItem(item) {
      const inventory = this.getInventory();
      inventory.push(item);
      this.saveInventory(inventory);
    }
  
    deleteItem(item) {
      const inventory = this.getInventory();
      const index = inventory.findIndex(i => i.id === item.id);
      if (index !== -1) {
        inventory.splice(index, 1);
        this.saveInventory(inventory);
      }
    }
  }
  
  export default new InventoryService();