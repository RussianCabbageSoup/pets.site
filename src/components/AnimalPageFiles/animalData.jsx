import '../css/an-page.css';

function AnimalData() {
    return ( 
        <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="card animal-card border-0">
                <div className="row g-0">
                <div className="col-md-6">
                    <img src='' className="animal-img" alt=''/>
                </div>
                <div className="col-md-6">
                    <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3 className="card-title mb-0">
                        <i className="bi bi-heart-fill text-danger me-2" />
                        Ищет дом
                        </h3>
                        <span className="badge bg-warning text-dark badge-custom">
                        <i className="bi bi-geo-alt me-1" />
                        Василиостровский
                        </span>
                    </div>
                    <div className="mb-4">
                        <h4 className="fw-bold">Кошка рыжая</h4>
                        <div className="text-muted mb-3">
                        <i className="bi bi-tag me-2" />
                        ID: <span className="fw-bold">1</span>
                        <span className="mx-2">•</span>
                        <i className="bi bi-shield-check me-2" />
                        Маркер: <span className="fw-bold">vc-001-spb</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="info-item">
                        <small className="text-muted d-block">
                            <i className="bi bi-calendar3 me-2" />
                            Дата обнаружения
                        </small>
                        <span className="fw-bold">05 марта 2023</span>
                        </div>
                        <div className="info-item">
                        <small className="text-muted d-block">
                            <i className="bi bi-geo me-2" />
                            Район
                        </small>
                        <span className="fw-bold">Василиостровский район</span>
                        </div>
                        <div className="info-item">
                        <small className="text-muted d-block">
                            <i className="bi bi-card-text me-2" />
                            Описание
                        </small>
                        <p className="mb-0 mt-1">Красивая рыжая кошка ищет любящую семью. Очень ласковая и игривая, приучена к лотку.</p>
                        </div>
                    </div>
                    <div className="d-grid gap-3 d-md-flex justify-content-md-end mt-4">
                        <button className="btn btn-contact btn-action text-white me-md-2 mb-2 mb-md-0" data-bs-toggle="modal" data-bs-target="#contactModal">
                        <i className="bi bi-chat-dots me-2" />
                        Связаться
                        </button>
                        <button className="btn btn-adopt btn-action text-white" data-bs-toggle="modal" data-bs-target="#adoptModal">
                        <i className="bi bi-house-heart me-2" />
                        Забрать
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default AnimalData;