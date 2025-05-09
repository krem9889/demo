705: { 
            id: 705, 
            name: 'منظف صحون', 
            price: '٨.٩٥', 
            description: 'منظف صحون فعال.',
            image: 'dish-soap.png',
            categoryId: 7
        },
        706: { 
            id: 706, 
            name: 'مطهر', 
            price: '١٣.٢٥', 
            description: 'مطهر يقتل 99.9% من الجراثيم.',
            image: 'disinfectant.png',
            categoryId: 7
        },
        
        // البلاستيك (categoryId: 8)
        801: { 
            id: 801, 
            name: 'أكواب بلاستيكية', 
            price: '٥.٧٥', 
            description: 'أكواب بلاستيكية للاستخدام مرة واحدة، عبوة من 50 كوب.',
            image: 'plastic-cups.png',
            categoryId: 8
        },
        802: { 
            id: 802, 
            name: 'صحون بلاستيكية', 
            price: '٦.٥٠', 
            description: 'صحون بلاستيكية للاستخدام مرة واحدة.',
            image: 'plastic-plates.png',
            categoryId: 8
        },
        803: { 
            id: 803, 
            name: 'أكياس قمامة', 
            price: '٩.٩٥', 
            description: 'أكياس قمامة قوية، عبوة من 20 كيس.',
            image: 'trash-bags.png',
            categoryId: 8
        },
        804: { 
            id: 804, 
            name: 'حافظات طعام', 
            price: '١٥.٣٠', 
            description: 'حافظات طعام بأحجام مختلفة، 5 قطع.',
            image: 'food-containers.png',
            categoryId: 8
        },
        805: { 
            id: 805, 
            name: 'ملاعق بلاستيكية', 
            price: '٤.٥٠', 
            description: 'ملاعق بلاستيكية، عبوة من 50 ملعقة.',
            image: 'plastic-spoons.png',
            categoryId: 8
        },
        806: { 
            id: 806, 
            name: 'شوك بلاستيكية', 
            price: '٤.٥٠', 
            description: 'شوك بلاستيكية، عبوة من 50 شوكة.',
            image: 'plastic-forks.png',
            categoryId: 8
        }
    };
    
    return products[productId] || { 
        id: productId, 
        name: getTranslation('unknown_product'), 
        price: '٠.٠٠', 
        description: getTranslation('no_description'),
        image: 'default.png',
        categoryId: 0
    };
}

// الحصول على منتجات الفئة
function getProductsByCategory(categoryId) {
    console.log('جلب منتجات الفئة:', categoryId);
    
    // تحويل معرّف الفئة إلى رقم
    const catId = parseInt(categoryId);
    
    // قائمة المنتجات حسب الفئة
    const categoryProducts = [];
    
    // الحصول على جميع المنتجات
    if (catId === 1) {
        for (let i = 101; i <= 106; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 2) {
        for (let i = 201; i <= 206; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 3) {
        for (let i = 301; i <= 306; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 4) {
        for (let i = 401; i <= 406; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 5) {
        for (let i = 501; i <= 506; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 6) {
        for (let i = 601; i <= 606; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 7) {
        for (let i = 701; i <= 706; i++) {
            categoryProducts.push(getProductData(i));
        }
    } else if (catId === 8) {
        for (let i = 801; i <= 806; i++) {
            categoryProducts.push(getProductData(i));
        }
    }
    
    return categoryProducts;
}

// ======== وظائف دعم اللغة ========

// اللغة الحالية
let currentLanguage = 'ar';

// ترجمات اللغة
const translations = {
    ar: {
        // القائمة الرئيسية والتنقل
        "home": "الرئيسية",
        "applications": "التطبيقات",
        "campus_grocery": "بقالة الحرم الجامعي",
        "cart": "السلة",
        "my_account": "حسابي",
        "search_placeholder": "ابحث عن المنتجات...",
        "browse_by_category": "تصفح حسب الفئة",
        "popular_products": "المنتجات الأكثر شعبية",
        "back_to_home": "الرجوع إلى الرئيسية",
        "back_to_category": "العودة إلى الفئة",
        
        // أسماء الفئات
        "dairy_eggs": "الألبان والبيض",
        "bakery": "المخبوزات",
        "fruits_vegetables": "الفواكة والخضروات",
        "snacks": "الوجبات الخفيفة",
        "beverages": "المشروبات",
        "personal_care": "العناية الشخصية",
        "household": "مستلزمات المنزل",
        "plastic": "البلاستيك",
        "unknown_category": "فئة غير معروفة",
        
        // السلة والمنتجات
        "add_to_cart": "أضف للسلة",
        "added_to_cart": "تمت إضافة {product} إلى السلة",
        "item_removed": "تم إزالة المنتج من السلة",
        "quantity": "الكمية:",
        "sar": "ريال",
        "remove": "إزالة",
        "no_products": "لا توجد منتجات في هذه الفئة",
        "unknown_product": "منتج غير معروف",
        "no_description": "لا يوجد وصف متاح لهذا المنتج.",
        
        // صفحة السلة
        "cart_title": "سلة التسوق",
        "empty_cart": "سلة التسوق فارغة",
        "order_summary": "ملخص الطلب",
        "total_products": "إجمالي المنتجات:",
        "delivery_fee": "رسوم التوصيل:",
        "free": "مجاناً",
        "total": "الإجمالي:",
        "delivery_info": "معلومات التوصيل",
        "building_number": "رقم الوحدة السكنية:",
        "building_placeholder": "أدخل رقم الوحدة السكنية",
        "room_number": "رقم الغرفة:",
        "room_placeholder": "أدخل رقم الغرفة",
        "checkout": "إتمام الطلب",
        "continue_shopping": "متابعة التسوق",
        "enter_address": "يرجى إدخال معلومات التوصيل",
        "order_success": "تم تقديم طلبك بنجاح!",
        
        // صفحة الحساب
        "account_title": "حسابي",
        "student": "طالب",
        "personal_info": "المعلومات الشخصية",
        "orders": "طلباتي",
        "delivery_address": "عنوان التوصيل",
        "change_password": "تغيير كلمة المرور",
        "fullname": "الاسم الكامل",
        "student_id": "الرقم الجامعي",
        "email": "البريد الإلكتروني",
        "phone": "رقم الجوال",
        "save_changes": "حفظ التغييرات",
        "no_orders": "لا توجد طلبات سابقة",
        "save_address": "حفظ العنوان",
        "current_password": "كلمة المرور الحالية",
        "new_password": "كلمة المرور الجديدة",
        "confirm_password": "تأكيد كلمة المرور الجديدة",
        "change_password_btn": "تغيير كلمة المرور",
        
        // التذييل
        "university_name": "الجامعة الإسلامية بالمدينة المنورة",
        "copyright": "© 2025 بقالة الحرم الجامعي. جميع الحقوق محفوظة."
    },
    en: {
        // Main menu and navigation
        "home": "Home",
        "applications": "Applications",
        "campus_grocery": "Campus Grocery",
        "cart": "Cart",
        "my_account": "My Account",
        "search_placeholder": "Search for products...",
        "browse_by_category": "Browse by Category",
        "popular_products": "Popular Products",
        "back_to_home": "Back to Home",
        "back_to_category": "Back to Category",
        
        // Category names
        "dairy_eggs": "Dairy & Eggs",
        "bakery": "Bakery",
        "fruits_vegetables": "Fruits & Vegetables",
        "snacks": "Snacks",
        "beverages": "Beverages",
        "personal_care": "Personal Care",
        "household": "Household",
        "plastic": "Plastic",
        "unknown_category": "Unknown Category",
        
        // Cart and products
        "add_to_cart": "Add to Cart",
        "added_to_cart": "{product} added to cart",
        "item_removed": "Item removed from cart",
        "quantity": "Quantity:",
        "sar": "SAR",
        "remove": "Remove",
        "no_products": "No products in this category",
        "unknown_product": "Unknown Product",
        "no_description": "No description available for this product.",
        
        // Cart page
        "cart_title": "Shopping Cart",
        "empty_cart": "Your cart is empty",
        "order_summary": "Order Summary",
        "total_products": "Products Total:",
        "delivery_fee": "Delivery Fee:",
        "free": "Free",
        "total": "Total:",
        "delivery_info": "Delivery Information",
        "building_number": "Building Number:",
        "building_placeholder": "Enter building number",
        "room_number": "Room Number:",
        "room_placeholder": "Enter room number",
        "checkout": "Checkout",
        "continue_shopping": "Continue Shopping",
        "enter_address": "Please enter delivery information",
        "order_success": "Your order has been placed successfully!",
        
        // Account page
        "account_title": "My Account",
        "student": "Student",
        "personal_info": "Personal Information",
        "orders": "My Orders",
        "delivery_address": "Delivery Address",
        "change_password": "Change Password",
        "fullname": "Full Name",
        "student_id": "Student ID",
        "email": "Email",
        "phone": "Phone Number",
        "save_changes": "Save Changes",
        "no_orders": "No previous orders",
        "save_address": "Save Address",
        "current_password": "Current Password",
        "new_password": "New Password",
        "confirm_password": "Confirm New Password",
        "change_password_btn": "Change Password",
        
        // Footer
        "university_name": "Islamic University of Madinah",
        "copyright": "© 2025 Campus Grocery. All rights reserved."
    }
};

// الحصول على ترجمة
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// تبديل اللغة
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // تحديث جميع النصوص
    updateAllTexts();
    
    // حفظ اللغة المفضلة
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// التحقق من اللغة المفضلة
function checkPreferredLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        updateAllTexts();
    }
}

// تحديث جميع النصوص
function updateAllTexts() {
    // تحديث الرأس
    document.querySelector('.apps-header h1').textContent = getTranslation('applications');
    document.querySelector('.grocery-header h2').textContent = getTranslation('campus_grocery');
    document.querySelector('.cart-button span').textContent = getTranslation('cart') + ' (' + getCartCount() + ')';
    document.querySelector('.account-button span').textContent = getTranslation('my_account');
    
    // تحديث مربع البحث
    document.querySelector('.search-input').placeholder = getTranslation('search_placeholder');
    
    // تحديث أقسام الصفحة الرئيسية
    document.querySelector('.categories-section .section-title').textContent = getTranslation('browse_by_category');
    document.querySelector('.popular-products-section .section-title').textContent = getTranslation('popular_products');
    
    // تحديث أسماء الفئات
    document.querySelectorAll('.category-name').forEach((name, index) => {
        const categoryKey = [
            'dairy_eggs', 'bakery', 'fruits_vegetables', 'snacks',
            'beverages', 'personal_care', 'household', 'plastic'
        ][index];
        name.textContent = getTranslation(categoryKey);
    });
    
    // تحديث أزرار إضافة إلى السلة
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = getTranslation('add_to_cart');
    });
    
    // تحديث العملة في كل الأسعار
    updateAllPrices();
    
    // تحديث النصوص المشتركة في صفحات أخرى
    updateCommonTexts();
}

// تحديث النصوص المشتركة
function updateCommonTexts() {
    // تحديث مسار التنقل
    document.querySelectorAll('.breadcrumb-home-link span').forEach(span => {
        span.textContent = getTranslation('home');
    });
    
    // تحديث أزرار العودة
    document.querySelectorAll('.back-button').forEach(btn => {
        btn.textContent = getTranslation('back_to_home');
    });
    
    // تحديث زر العودة إلى الفئة
    const backToCategoryBtn = document.querySelector('.back-to-category-button');
    if (backToCategoryBtn) {
        backToCategoryBtn.textContent = getTranslation('back_to_category');
    }
    
    // تحديث عنوان الكمية
    const quantityLabel = document.querySelector('.quantity-label');
    if (quantityLabel) {
        quantityLabel.textContent = getTranslation('quantity');
    }
    
    // تحديث زر إضافة إلى السلة
    const addToCartBtn = document.querySelector('.add-to-cart-button');
    if (addToCartBtn) {
        addToCartBtn.textContent = getTranslation('add_to_cart');
    }
    
    // تحديث صفحة السلة
    updateCartPageTexts();
    
    // تحديث صفحة الحساب
    updateAccountPageTexts();
    
    // تحديث التذييل
    document.querySelector('.university-info .university-name').textContent = getTranslation('university_name');
    document.querySelector('.copyright').textContent = getTranslation('copyright');
}

// تحديث نصوص صفحة السلة
function updateCartPageTexts() {
    const cartPageTitle = document.querySelector('.cart-page .page-title');
    if (cartPageTitle) {
        cartPageTitle.textContent = getTranslation('cart_title');
    }
    
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    if (emptyCartMessage) {
        emptyCartMessage.textContent = getTranslation('empty_cart');
    }
    
    const cartSummaryTitle = document.querySelector('.cart-summary h3');
    if (cartSummaryTitle) {
        cartSummaryTitle.textContent = getTranslation('order_summary');
    }
    
    const summaryRows = document.querySelectorAll('.summary-row');
    if (summaryRows.length >= 3) {
        summaryRows[0].firstElementChild.textContent = getTranslation('total_products');
        summaryRows[1].firstElementChild.textContent = getTranslation('delivery_fee');
        summaryRows[1].lastElementChild.textContent = getTranslation('free');
        summaryRows[2].firstElementChild.textContent = getTranslation('total');
    }
    
    const deliveryInfoTitle = document.querySelector('.delivery-info h4');
    if (deliveryInfoTitle) {
        deliveryInfoTitle.textContent = getTranslation('delivery_info');
    }
    
    const buildingLabel = document.querySelector('label[for="building-number"]');
    if (buildingLabel) {
        buildingLabel.textContent = getTranslation('building_number');
    }
    
    const buildingInput = document.getElementById('building-number');
    if (buildingInput) {
        buildingInput.placeholder = getTranslation('building_placeholder');
    }
    
    const roomLabel = document.querySelector('label[for="room-number"]');
    if (roomLabel) {
        roomLabel.textContent = getTranslation('room_number');
    }
    
    const roomInput = document.getElementById('room-number');
    if (roomInput) {
        roomInput.placeholder = getTranslation('room_placeholder');
    }
    
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.textContent = getTranslation('checkout');
    }
    
    const continueShoppingButton = document.querySelector('.continue-shopping');
    if (continueShoppingButton) {
        continueShoppingButton.textContent = getTranslation('continue_shopping');
    }
}

// تحديث نصوص صفحة الحساب
function updateAccountPageTexts() {
    const accountPageTitle = document.querySelector('.account-page .page-title');
    if (accountPageTitle) {
        accountPageTitle.textContent = getTranslation('account_title');
    }
    
    const userType = document.querySelector('.user-type');
    if (userType) {
        userType.textContent = getTranslation('student');
    }
    
    // تحديث عناصر القائمة
    const menuItems = document.querySelectorAll('.account-menu .menu-item');
    if (menuItems.length >= 4) {
        menuItems[0].querySelector('span').textContent = getTranslation('personal_info');
        menuItems[1].querySelector('span').textContent = getTranslation('orders');
        menuItems[2].querySelector('span').textContent = getTranslation('delivery_address');
        menuItems[3].querySelector('span').textContent = getTranslation('change_password');
    }
    
    // تحديث عناوين الأقسام
    document.querySelectorAll('.account-section h2').forEach(heading => {
        if (heading.parentElement.classList.contains('personal-info-section')) {
            heading.textContent = getTranslation('personal_info');
        } else if (heading.parentElement.classList.contains('orders-section')) {
            heading.textContent = getTranslation('orders');
        } else if (heading.parentElement.classList.contains('address-section')) {
            heading.textContent = getTranslation('delivery_address');
        } else if (heading.parentElement.classList.contains('password-section')) {
            heading.textContent = getTranslation('change_password');
        }
    });
    
    // تحديث نموذج المعلومات الشخصية
    const personalInfoLabels = document.querySelectorAll('.personal-info-section label');
    if (personalInfoLabels.length >= 4) {
        personalInfoLabels[0].textContent = getTranslation('fullname');
        personalInfoLabels[1].textContent = getTranslation('student_id');
        personalInfoLabels[2].textContent = getTranslation('email');
        personalInfoLabels[3].textContent = getTranslation('phone');
    }
    
    // تحديث رسالة لا توجد طلبات
    const emptyOrders = document.querySelector('.empty-orders p');
    if (emptyOrders) {
        emptyOrders.textContent = getTranslation('no_orders');
    }
    
    // تحديث نموذج العنوان
    const addressLabels = document.querySelectorAll('.address-section label');
    if (addressLabels.length >= 2) {
        addressLabels[0].textContent = getTranslation('building_number');
        addressLabels[1].textContent = getTranslation('room_number');
    }
    
    // تحديث نموذج كلمة المرور
    const passwordLabels = document.querySelectorAll('.password-section label');
    if (passwordLabels.length >= 3) {
        passwordLabels[0].textContent = getTranslation('current_password');
        passwordLabels[1].textContent = getTranslation('new_password');
        passwordLabels[2].textContent = getTranslation('confirm_password');
    }
    
    // تحديث أزرار الحفظ
    document.querySelectorAll('.btn-save').forEach(btn => {
        if (btn.closest('.personal-info-section')) {
            btn.textContent = getTranslation('save_changes');
        } else if (btn.closest('.address-section')) {
            btn.textContent = getTranslation('save_address');
        } else if (btn.closest('.password-section')) {
            btn.textContent = getTranslation('change_password_btn');
        }
    });
}

// تحديث جميع الأسعار
function updateAllPrices() {
    document.querySelectorAll('.product-price').forEach(price => {
        const priceText = price.textContent;
        const match = priceText.match(/[٠١٢٣٤٥٦٧٨٩0-9.]+/);
        
        if (match) {
            let numericPart = match[0];
            
            // تحويل الأرقام حسب اللغة
            if (currentLanguage === 'en' && /[٠١٢٣٤٥٦٧٨٩]/.test(numericPart)) {
                numericPart = arabicToEnglishNumbers(numericPart);
            } else if (currentLanguage === 'ar' && /[0-9]/.test(numericPart)) {
                numericPart = englishToArabicNumbers(numericPart);
            }
            
            price.textContent = numericPart + ' ' + getCurrencyUnit();
        }
    });
}

// الحصول على وحدة العملة
function getCurrencyUnit() {
    return getTranslation('sar');
}

// الحصول على عدد العناصر في السلة
function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// تحويل الأرقام العربية إلى إنجليزية
function arabicToEnglishNumbers(str) {
    return str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
        return d.charCodeAt(0) - 1632;
    });
}

// تحويل الأرقام الإنجليزية إلى عربية
function englishToArabicNumbers(str) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[0-9]/g, function(d) {
        return arabicNumbers[d];
    });
}

// الحصول على اللغة الحالية
function getCurrentLanguage() {
    return currentLanguage;
}// التنقل إلى صفحة السلة
function navigateToCart() {
    console.log('التنقل إلى السلة');
    
    // تحديث محتوى السلة
    updateCartItems();
    
    // إظهار صفحة السلة
    hideAllPages();
    document.querySelector('.cart-page').style.display = 'block';
}

// التنقل إلى صفحة الحساب
function navigateToAccount() {
    console.log('التنقل إلى الحساب');
    
    // إظهار صفحة الحساب
    hideAllPages();
    document.querySelector('.account-page').style.display = 'block';
    
    // تأكد من عرض القسم النشط
    showActiveAccountSection();
}

// إخفاء جميع الصفحات
function hideAllPages() {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.category-page').style.display = 'none';
    document.querySelector('.product-page').style.display = 'none';
    document.querySelector('.cart-page').style.display = 'none';
    document.querySelector('.account-page').style.display = 'none';
}

// ======== وظائف تحديث واجهة المستخدم ========

// تحديث أيقونة الفئة
function updateCategoryIcon(categoryId) {
    const categoryIcon = document.querySelector('.category-header i');
    if (!categoryIcon) return;
    
    // إزالة جميع الأصناف
    categoryIcon.className = '';
    
    // إضافة الصنف المناسب بناءً على الفئة
    switch (parseInt(categoryId)) {
        case 1:
            categoryIcon.className = 'fa-solid fa-cheese';
            break;
        case 2:
            categoryIcon.className = 'fa-solid fa-bread-slice';
            break;
        case 3:
            categoryIcon.className = 'fa-solid fa-apple-whole';
            break;
        case 4:
            categoryIcon.className = 'fa-solid fa-cookie';
            break;
        case 5:
            categoryIcon.className = 'fa-solid fa-mug-hot';
            break;
        case 6:
            categoryIcon.className = 'fa-solid fa-pump-soap';
            break;
        case 7:
            categoryIcon.className = 'fa-solid fa-broom';
            break;
        case 8:
            categoryIcon.className = 'fa-solid fa-box';
            break;
        default:
            categoryIcon.className = 'fa-solid fa-tag';
    }
}

// تحديث منتجات الفئة
function updateCategoryProducts(categoryId) {
    // الحصول على منتجات الفئة
    const products = getProductsByCategory(categoryId);
    console.log('تم العثور على', products.length, 'منتجات للفئة', categoryId);
    
    // الحصول على عنصر شبكة المنتجات
    const productsGrid = document.querySelector('.category-page .products-grid');
    
    // مسح المنتجات الحالية
    productsGrid.innerHTML = '';
    
    // إذا لم تكن هناك منتجات
    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">' + getTranslation('no_products') + '</div>';
        return;
    }
    
    // إضافة المنتجات إلى الشبكة
    products.forEach(product => {
        productsGrid.innerHTML += `
            <div class="product-card" onclick="navigateToProduct(${product.id}, ${product.categoryId})">
                <div class="product-image">
                    <img src="images/products/${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.png'">
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-details">
                    <span class="product-price">${product.price} ${getCurrencyUnit()}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">
                        ${getTranslation('add_to_cart')}
                    </button>
                </div>
            </div>
        `;
    });
}

// تحديث عناصر السلة
function updateCartItems() {
    // الحصول على عناصر السلة من التخزين المحلي
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // الحصول على عنصر حاوية عناصر السلة
    const cartItems = document.querySelector('.cart-items');
    
    // رسالة فارغة
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    
    // مسح المحتوى الحالي
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        // تحديث الإجمالي
        updateCartTotal(0);
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    
    // متغير لحساب إجمالي السعر
    let totalPrice = 0;
    
    // إضافة عناصر السلة
    cart.forEach(item => {
        const product = getProductData(item.id);
        
        // تحويل السعر من نص إلى رقم (إزالة الأرقام العربية وحروف العملة)
        const priceNumber = parseFloat(arabicToEnglishNumbers(product.price));
        const itemTotal = priceNumber * item.quantity;
        totalPrice += itemTotal;
        
        cartItems.innerHTML += `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image">
                    <img src="images/products/${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.png'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-price">${product.price} ${getCurrencyUnit()}</div>
                    <div class="cart-item-controls">
                        <div class="cart-quantity-selector">
                            <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span class="cart-quantity-value">${item.quantity}</span>
                            <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <div class="cart-item-remove" onclick="removeCartItem(${item.id})">
                            ${getTranslation('remove')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // تحديث إجمالي السعر
    updateCartTotal(totalPrice);
}

// تحديث إجمالي السعر في السلة
function updateCartTotal(total) {
    // تحويل الرقم إلى تنسيق رقمي
    const formattedTotal = getCurrentLanguage() === 'ar' ? 
        englishToArabicNumbers(total.toFixed(2)) : 
        total.toFixed(2);
    
    // تحديث عناصر الإجمالي
    document.querySelector('.total-price').textContent = formattedTotal + ' ' + getCurrencyUnit();
    document.querySelector('.final-price').textContent = formattedTotal + ' ' + getCurrencyUnit();
}

// تحديث عدد السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    // تحديث عدد العناصر في زر السلة
    const cartCountElement = document.querySelector('.cart-button span');
    if (cartCountElement) {
        cartCountElement.textContent = getTranslation('cart') + ' (' + count + ')';
    }
}

// تحديث كمية عنصر في السلة
function updateCartItemQuantity(productId, newQuantity) {
    // ضمان أن الكمية على الأقل 1
    newQuantity = Math.max(1, newQuantity);
    
    // تحديث السلة
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // تحديث واجهة المستخدم
        updateCartItems();
        updateCartCount();
    }
}

// إزالة عنصر من السلة
function removeCartItem(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث واجهة المستخدم
    updateCartItems();
    updateCartCount();
    
    // عرض إشعار
    showNotification(getTranslation('item_removed'));
}

// إظهار القسم النشط في صفحة الحساب
function showActiveAccountSection() {
    const activeMenuItem = document.querySelector('.account-menu .menu-item.active');
    
    if (activeMenuItem) {
        const sectionId = activeMenuItem.getAttribute('data-section');
        switchAccountSection(sectionId);
    }
}

// تبديل أقسام صفحة الحساب
function switchAccountSection(sectionId) {
    // إلغاء تنشيط جميع عناصر القائمة
    document.querySelectorAll('.account-menu .menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // تنشيط عنصر القائمة المختار
    document.querySelector(`.account-menu .menu-item[data-section="${sectionId}"]`).classList.add('active');
    
    // إخفاء جميع الأقسام
    document.querySelectorAll('.account-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // إظهار القسم المختار
    document.querySelector(`.${sectionId}-section`).classList.add('active');
}

// معالجة إتمام الطلب
function processCheckout() {
    const buildingNumber = document.getElementById('building-number').value;
    const roomNumber = document.getElementById('room-number').value;
    
    if (!buildingNumber || !roomNumber) {
        showNotification(getTranslation('enter_address'));
        return;
    }
    
    // في تطبيق حقيقي: إرسال طلب API لمعالجة الطلب
    
    // تفريغ السلة
    localStorage.setItem('cart', '[]');
    
    // تحديث واجهة المستخدم
    updateCartItems();
    updateCartCount();
    
    // عرض إشعار نجاح
    showNotification(getTranslation('order_success'));
    
    // العودة إلى الصفحة الرئيسية بعد فترة قصيرة
    setTimeout(navigateToHome, 2000);
}

// ======== وظائف السلة والمنتجات ========

// إضافة منتج إلى السلة
function addToCart(productId, quantity) {
    console.log('إضافة للسلة:', productId, 'الكمية:', quantity);
    
    // الحصول على بيانات المنتج
    const product = getProductData(productId);
    
    // الحصول على محتوى السلة من التخزين المحلي
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // البحث عن المنتج في السلة
    const existingProductIndex = cart.findIndex(item => item.id === parseInt(productId));
    
    // إذا كان المنتج موجودًا بالفعل، زيادة الكمية
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        // إضافة المنتج إلى السلة
        cart.push({
            id: parseInt(productId),
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // حفظ السلة في التخزين المحلي
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث عدد العناصر في السلة
    updateCartCount();
    
    // عرض إشعار
    showNotification(getTranslation('added_to_cart').replace('{product}', product.name));
}

// إضافة المنتج الحالي إلى السلة من صفحة تفاصيل المنتج
function addToCartFromProductPage() {
    const productId = document.querySelector('.product-page').getAttribute('data-product-id');
    const quantity = parseInt(document.querySelector('.quantity-value').textContent);
    
    addToCart(productId, quantity);
}

// زيادة الكمية في صفحة المنتج
function increaseQuantity() {
    const quantityElement = document.querySelector('.quantity-value');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

// تقليل الكمية في صفحة المنتج
function decreaseQuantity() {
    const quantityElement = document.querySelector('.quantity-value');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

// عرض إشعار
function showNotification(message) {
    // التحقق من وجود عنصر الإشعار
    let notification = document.querySelector('.notification');
    
    // إنشاء عنصر الإشعار إذا لم يكن موجودًا
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    // تعيين رسالة الإشعار
    notification.textContent = message;
    
    // عرض الإشعار
    notification.style.opacity = '1';
    
    // إخفاء الإشعار بعد 3 ثوانٍ
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);
}

// ======== وظائف الوصول إلى البيانات ========

// الحصول على بيانات الفئة
function getCategoryData(categoryId) {
    // هذه بيانات وهمية - في تطبيق حقيقي، ستقوم بجلبها من واجهة برمجة التطبيقات
    const categories = {
        1: { id: 1, name: getTranslation('dairy_eggs'), icon: 'dairy-eggs.png' },
        2: { id: 2, name: getTranslation('bakery'), icon: 'bakery.png' },
        3: { id: 3, name: getTranslation('fruits_vegetables'), icon: 'fruits-vegetables.png' },
        4: { id: 4, name: getTranslation('snacks'), icon: 'snacks.png' },
        5: { id: 5, name: getTranslation('beverages'), icon: 'beverages.png' },
        6: { id: 6, name: getTranslation('personal_care'), icon: 'personal-care.png' },
        7: { id: 7, name: getTranslation('household'), icon: 'household.png' },
        8: { id: 8, name: getTranslation('plastic'), icon: 'plastic.png' }
    };
    
    return categories[categoryId] || { id: categoryId, name: getTranslation('unknown_category'), icon: 'default.png' };
}

// الحصول على بيانات المنتج
function getProductData(productId) {
    // هذه بيانات وهمية - في تطبيق حقيقي، ستقوم بجلبها من واجهة برمجة التطبيقات
    const products = {
        // الألبان والبيض (categoryId: 1)
        101: { 
            id: 101, 
            name: 'حليب طازج كامل الدسم', 
            price: '٧.٥٠', 
            description: 'حليب طازج كامل الدسم عالي الجودة، مناسب للاستخدام اليومي.',
            image: 'milk.png',
            categoryId: 1
        },
        102: { 
            id: 102, 
            name: 'جبن شيدر', 
            price: '١٥.٧٥', 
            description: 'جبن شيدر ذهبي طازج.',
            image: 'cheddar.png',
            categoryId: 1
        },
        103: { 
            id: 103, 
            name: 'بيض طازج', 
            price: '١٤.٥٠', 
            description: 'بيض دجاج طازج، عبوة من 12 بيضة.',
            image: 'eggs.png',
            categoryId: 1
        },
        104: { 
            id: 104, 
            name: 'لبن زبادي', 
            price: '٥.٢٥', 
            description: 'لبن زبادي طبيعي.',
            image: 'yogurt.png',
            categoryId: 1
        },
        105: { 
            id: 105, 
            name: 'جبنة كريم', 
            price: '١٢.٠٠', 
            description: 'جبنة كريم قابلة للدهن.',
            image: 'cream-cheese.png',
            categoryId: 1
        },
        106: { 
            id: 106, 
            name: 'زبدة', 
            price: '٩.٧٥', 
            description: 'زبدة طازجة.',
            image: 'butter.png',
            categoryId: 1
        },
        
        // المخبوزات (categoryId: 2)
        201: { 
            id: 201, 
            name: 'خبز أبيض طازج', 
            price: '٣.٢٥', 
            description: 'خبز أبيض طازج، مخبوز يومياً.',
            image: 'bread.png',
            categoryId: 2
        },
        202: { 
            id: 202, 
            name: 'خبز بر', 
            price: '٤.٥٠', 
            description: 'خبز قمح كامل صحي.',
            image: 'brown-bread.png',
            categoryId: 2
        },
        203: { 
            id: 203, 
            name: 'كعك', 
            price: '٨.٧٥', 
            description: 'كعك طازج محلي الصنع.',
            image: 'cake.png',
            categoryId: 2
        },
        204: { 
            id: 204, 
            name: 'كرواسان', 
            price: '٦.٥٠', 
            description: 'كرواسان طازج.',
            image: 'croissant.png',
            categoryId: 2
        },
        205: { 
            id: 205, 
            name: 'بسكويت', 
            price: '٧.٩٥', 
            description: 'بسكويت محلى بالشوكولاتة.',
            image: 'cookies.png',
            categoryId: 2
        },
        206: { 
            id: 206, 
            name: 'معجنات متنوعة', 
            price: '١٠.٥٠', 
            description: 'معجنات متنوعة طازجة.',
            image: 'pastry.png',
            categoryId: 2
        },
        
        // الفواكة والخضروات (categoryId: 3)
        301: { 
            id: 301, 
            name: 'تفاح أحمر', 
            price: '٩.٨٠', 
            description: 'تفاح أحمر طازج، مستورد من أفضل المزارع.',
            image: 'apple.png',
            categoryId: 3
        },
        302: { 
            id: 302, 
            name: 'موز', 
            price: '٦.٥٠', 
            description: 'موز طازج.',
            image: 'banana.png',
            categoryId: 3
        },
        303: { 
            id: 303, 
            name: 'خيار', 
            price: '٤.٢٥', 
            description: 'خيار طازج محلي.',
            image: 'cucumber.png',
            categoryId: 3
        },
        304: { 
            id: 304, 
            name: 'طماطم', 
            price: '٥.٦٠', 
            description: 'طماطم طازجة.',
            image: 'tomato.png',
            categoryId: 3
        },
        305: { 
            id: 305, 
            name: 'برتقال', 
            price: '٧.٩٠', 
            description: 'برتقال حلو.',
            image: 'orange.png',
            categoryId: 3
        },
        306: { 
            id: 306, 
            name: 'بطاطس', 
            price: '٥.٧٥', 
            description: 'بطاطس طازجة.',
            image: 'potato.png',
            categoryId: 3
        },
        
        // الوجبات الخفيفة (categoryId: 4)
        401: { 
            id: 401, 
            name: 'شوكولاتة بالحليب', 
            price: '٥.٥٠', 
            description: 'شوكولاتة بالحليب لذيذة.',
            image: 'chocolate.png',
            categoryId: 4
        },
        402: { 
            id: 402, 
            name: 'شيبس', 
            price: '٣.٧٥', 
            description: 'شيبس بنكهة الملح.',
            image: 'chips.png',
            categoryId: 4
        },
        403: { 
            id: 403, 
            name: 'مكسرات مشكلة', 
            price: '١٥.٩٠', 
            description: 'مكسرات مشكلة طازجة.',
            image: 'nuts.png',
            categoryId: 4
        },
        404: { 
            id: 404, 
            name: 'بسكويت بالشوكولاتة', 
            price: '٦.٢٥', 
            description: 'بسكويت محشو بالشوكولاتة.',
            image: 'choc-cookies.png',
            categoryId: 4
        },
        405: { 
            id: 405, 
            name: 'لبان', 
            price: '٢.٠٠', 
            description: 'لبان بنكهة النعناع.',
            image: 'gum.png',
            categoryId: 4
        },
        406: { 
            id: 406, 
            name: 'حلوى الجيلي', 
            price: '٤.٥٠', 
            description: 'حلوى الجيلي متعددة النكهات.',
            image: 'jelly.png',
            categoryId: 4
        },
        
        // المشروبات (categoryId: 5)
        501: { 
            id: 501, 
            name: 'عصير برتقال طبيعي', 
            price: '١٢.٠٠', 
            description: 'عصير برتقال طبيعي 100%، بدون إضافة سكر أو مواد حافظة.',
            image: 'orange-juice.png',
            categoryId: 5
        },
        502: { 
            id: 502, 
            name: 'ماء معدني', 
            price: '١.٥٠', 
            description: 'ماء معدني نقي في عبوة 500 مل.',
            image: 'water.png',
            categoryId: 5
        },
        503: { 
            id: 503, 
            name: 'مشروب غازي', 
            price: '٣.٠٠', 
            description: 'مشروب غازي منعش.',
            image: 'soda.png',
            categoryId: 5
        },
        504: { 
            id: 504, 
            name: 'عصير تفاح', 
            price: '١٠.٠٠', 
            description: 'عصير تفاح طبيعي.',
            image: 'apple-juice.png',
            categoryId: 5
        },
        505: { 
            id: 505, 
            name: 'قهوة', 
            price: '١٤.٥٠', 
            description: 'قهوة عربية فاخرة.',
            image: 'coffee.png',
            categoryId: 5
        },
        506: { 
            id: 506, 
            name: 'شاي', 
            price: '٥.٧٥', 
            description: 'شاي أخضر ممتاز.',
            image: 'tea.png',
            categoryId: 5
        },
        
        // العناية الشخصية (categoryId: 6)
        601: { 
            id: 601, 
            name: 'شامبو', 
            price: '١٨.٢٥', 
            description: 'شامبو للشعر العادي.',
            image: 'shampoo.png',
            categoryId: 6
        },
        602: { 
            id: 602, 
            name: 'معجون أسنان', 
            price: '٩.٩٠', 
            description: 'معجون أسنان بالنعناع.',
            image: 'toothpaste.png',
            categoryId: 6
        },
        603: { 
            id: 603, 
            name: 'صابون', 
            price: '٦.٧٥', 
            description: 'صابون بالألوفيرا.',
            image: 'soap.png',
            categoryId: 6
        },
        604: { 
            id: 604, 
            name: 'كريم مرطب', 
            price: '١٩.٩٥', 
            description: 'كريم مرطب للبشرة الجافة.',
            image: 'cream.png',
            categoryId: 6
        },
        605: { 
            id: 605, 
            name: 'مزيل عرق', 
            price: '١٢.٥٠', 
            description: 'مزيل عرق بدون كحول.',
            image: 'deodorant.png',
            categoryId: 6
        },
        606: { 
            id: 606, 
            name: 'فرشاة أسنان', 
            price: '٧.٨٠', 
            description: 'فرشاة أسنان ناعمة.',
            image: 'toothbrush.png',
            categoryId: 6
        },
        
        // مستلزمات المنزل (categoryId: 7)
        701: { 
            id: 701, 
            name: 'منظف أرضيات', 
            price: '١٤.٢٥', 
            description: 'منظف أرضيات متعدد الاستخدامات.',
            image: 'floor-cleaner.png',
            categoryId: 7
        },
        702: { 
            id: 702, 
            name: 'مناديل ورقية', 
            price: '٧.٥٠', 
            description: 'مناديل ورقية ناعمة.',
            image: 'tissues.png',
            categoryId: 7
        },
        703: { 
            id: 703, 
            name: 'منظف زجاج', 
            price: '١١.٨٠', 
            description: 'منظف زجاج فعال.',
            image: 'glass-cleaner.png',
            categoryId: 7
        },
        704: { 
            id: 704, 
            name: 'مسحوق غسيل', 
            price: '٢٣.٩٥', 
            description: 'مسحوق غسيل للغسالات الأوتوماتيكية.',
            image: 'detergent.png',
            categoryId: 7
        },
        705: { 
            id:/**
 * app.js - ملف JavaScript الرئيسي لبقالة الحرم الجامعي
 */

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل التطبيق');
    
    // إضافة مستمعات الأحداث
    setupEventListeners();
    
    // تحديث عدد السلة
    updateCartCount();
    
    // التحقق من اللغة المفضلة
    checkPreferredLanguage();
});

// إعداد مستمعات الأحداث
function setupEventListeners() {
    // مستمع أحداث بطاقات الفئات
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category-id');
            navigateToCategory(categoryId);
        });
    });
    
    // مستمع أحداث بطاقات المنتجات
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.add-to-cart-btn')) return;
            const productId = this.getAttribute('data-product-id');
            const categoryId = this.getAttribute('data-category-id');
            navigateToProduct(productId, categoryId);
        });
    });
    
    // مستمع أحداث زر إضافة إلى السلة
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-product-id');
            const categoryId = this.closest('.product-card').getAttribute('data-category-id');
            addToCart(productId, 1);
        });
    });
    
    // أزرار التنقل إلى الصفحة الرئيسية
    document.querySelectorAll('.back-button, .breadcrumb-home-link').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToHome();
        });
    });
    
    // أزرار زيادة ونقصان الكمية
    document.querySelector('.quantity-decrease').addEventListener('click', decreaseQuantity);
    document.querySelector('.quantity-increase').addEventListener('click', increaseQuantity);
    
    // زر إضافة إلى السلة في صفحة المنتج
    document.querySelector('.add-to-cart-button').addEventListener('click', addToCartFromProductPage);
    
    // زر العودة إلى الفئة في صفحة المنتج
    document.querySelector('.back-to-category-button').addEventListener('click', navigateBackToCategory);
    
    // مستمع حدث زر تبديل اللغة
    document.querySelector('.language-toggle').addEventListener('click', toggleLanguage);
    
    // مستمعات أحداث قائمة الحساب
    document.querySelectorAll('.account-menu .menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchAccountSection(sectionId);
        });
    });
}

// ======== وظائف التنقل في التطبيق ========

// التنقل إلى الصفحة الرئيسية
function navigateToHome() {
    hideAllPages();
    document.querySelector('.home-page').style.display = 'block';
}

// التنقل إلى صفحة الفئة
function navigateToCategory(categoryId) {
    console.log('التنقل إلى الفئة:', categoryId);
    
    // تحويل معرّف الفئة إلى رقم
    const catId = parseInt(categoryId);
    
    // الحصول على بيانات الفئة
    const category = getCategoryData(catId);
    console.log('بيانات الفئة:', category);
    
    // تحديث عنوان الفئة
    document.querySelector('.category-title').textContent = category.name;
    
    // تحديث مسار التنقل
    document.querySelector('.breadcrumb-current').textContent = category.name;
    
    // تحديث أيقونة الفئة
    updateCategoryIcon(catId);
    
    // تحديث المنتجات في الفئة
    updateCategoryProducts(catId);
    
    // تخزين معرّف الفئة الحالية
    document.querySelector('.category-page').setAttribute('data-current-category-id', catId);
    
    // إظهار صفحة الفئة
    hideAllPages();
    document.querySelector('.category-page').style.display = 'block';
}

// التنقل إلى صفحة المنتج
function navigateToProduct(productId, categoryId) {
    console.log('التنقل إلى المنتج:', productId, 'من الفئة:', categoryId);
    
    // تحويل المعرّفات إلى أرقام
    const prodId = parseInt(productId);
    const catId = parseInt(categoryId);
    
    // الحصول على بيانات المنتج والفئة
    const product = getProductData(prodId);
    const category = getCategoryData(catId);
    
    // تحديث تفاصيل المنتج
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-price').textContent = product.price + ' ' + getCurrencyUnit();
    document.querySelector('.product-description p').textContent = product.description || getTranslation('no_description');
    
    // تحديث صورة المنتج
    const productImage = document.getElementById('product-detail-image');
    if (productImage) {
        productImage.src = 'images/products/' + product.image;
        productImage.alt = product.name;
    }
    
    // تحديث مسار التنقل
    const categoryLink = document.querySelector('.breadcrumb-link');
    categoryLink.textContent = category.name;
    categoryLink.setAttribute('data-category-id', catId);
    
    categoryLink.onclick = function(e) {
        e.preventDefault();
        navigateToCategory(catId);
    };
    
    document.querySelector('.product-page .breadcrumb-current').textContent = product.name;
    
    // تخزين معرّفات المنتج والفئة
    const productPage = document.querySelector('.product-page');
    productPage.setAttribute('data-product-id', prodId);
    productPage.setAttribute('data-category-id', catId);
    
    // إعادة تعيين الكمية
    document.querySelector('.quantity-value').textContent = '1';
    
    // إظهار صفحة المنتج
    hideAllPages();
    document.querySelector('.product-page').style.display = 'block';
}

// العودة إلى الفئة من صفحة المنتج
function navigateBackToCategory() {
    const categoryId = document.querySelector('.product-page').getAttribute('data-category-id');
    navigateToCategory(categoryId);
}

// التنقل إلى صفحة السلة
function navigateToCart() {
    console.log('التنقل إلى السلة');