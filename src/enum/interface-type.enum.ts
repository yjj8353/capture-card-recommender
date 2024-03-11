export enum InterfaceType {
  // USB 규격
  USB2 = 'USB 2.0',

  // [USB 3.0]과 [USB 3.1 Gen 1]과 동일
  USB32_GEN11 = 'USB 3.2 Gen 1x1',
  USB32_GEN12 = 'USB 3.2 Gen 1x2',

  // [USB 3.1 Gen 2]과 동일
  USB32_GEN21 = 'USB 3.2 Gen 2x1',
  USB32_GEN22 = 'USB 3.2 Gen 2x2',

  // PCI Express 규격
  PCI_EXPRESS_GEN2_X1 = 'PCI-Express Gen 2 x1',
  PCI_EXPRESS_GEN2_X2 = 'PCI-Express Gen 2 x2',
  PCI_EXPRESS_GEN2_X4 = 'PCI-Express Gen 2 x4',
  PCI_EXPRESS_GEN2_X8 = 'PCI-Express Gen 2 x8',
  PCI_EXPRESS_GEN2_X16 = 'PCI-Express Gen 2 x16',

  PCI_EXPRESS_GEN3_X1 = 'PCI-Express Gen 3 x1',
  PCI_EXPRESS_GEN3_X2 = 'PCI-Express Gen 3 x2',
  PCI_EXPRESS_GEN3_X4 = 'PCI-Express Gen 3 x4',
  PCI_EXPRESS_GEN3_X8 = 'PCI-Express Gen 3 x8',
  PCI_EXPRESS_GEN3_X16 = 'PCI-Express Gen 3 x16',

  // 그 외
  ETC = 'ETC',
}
