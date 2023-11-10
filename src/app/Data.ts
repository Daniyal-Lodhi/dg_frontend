export class Data {
    orders: {
        about: {
            sectionName: string;
            description: string;
        };
        purchaseOrders: {
            about: {
                sectionName: string;
                description: string;
            };
            orders: {
                currentMonth: {
                    orderNumber: string;
                    supplier: string;
                    totalAmount: number;
                    status: string;
                }[];
                lastMonth: {
                    orderNumber: string;
                    supplier: string;
                    totalAmount: number;
                    status: string;
                }[];
                last2Months: {
                    orderNumber: string;
                    supplier: string;
                    totalAmount: number;
                    status: string;
                }[];
            };
            saleOrders: {
                about: {
                    sectionName: string;
                    description: string;
                };
                orders: {
                    currentMonth: {
                        orderNumber: string;
                        customer: string;
                        totalAmount: number;
                        status: string;
                    }[];
                    lastMonth: {
                        orderNumber: string;
                        customer: string;
                        totalAmount: number;
                        status: string;
                    }[];
                    last2Months: {
                        orderNumber: string;
                        customer: string;
                        totalAmount: number;
                        status: string;
                    }[];
                };
            };
        };
        
    };
    projects: {
        websiteProjects: {
            name: string;
            projectType: string;
            startDate: string;
            endDate: string;
            totalTimeTaken: string;
            budget: number;
            projectManager: string;
            clientName: string;
        }[];
        AndroidProjects: {
            name: string;
            projectType: string;
            startDate: string;
            endDate: string;
            totalTimeTaken: string;
            budget: number;
            projectManager: string;
            clientName: string;
        }[];
        AiProjects: {
            name: string;
            projectType: string;
            startDate: string;
            endDate: string;
            totalTimeTaken: string;
            budget: number;
            projectManager: string;
            clientName: string;
        }[];
    };

    tags: {
        BigProjects: {
            description: string;
        };
        topSalesOrders: {
            description: string;
        };
    };
    businessDomains: {
        customerdata: {
            name: string;
            description: string;
            owner: string;
            createdDate: string;
            lastModified: string;
            entries: {
                entryName: string;
                entryType: string;
                entryStatus: string;
            }[];
        };
        productcataloge: {
            name: string;
            description: string;
            owner: string;
            createdDate: string;
            lastModified: string;
            entries: {
                entryName: string;
                entryType: string;
                entryStatus: string;
            }[];
        };
        financialRecords: {
            name: string;
            description: string;
            owner: string;
            createdDate: string;
            lastModified: string;
            entries: {
                entryName: string;
                entryType: string;
                entryStatus: string;
            }[];
        };
    };
}
