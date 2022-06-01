<div class="row justify-content-center">
    <div class="col-md-12 col-lg-6">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <h5 class="card-title">Clocking Member Registration</h5>
                <?php 
                    require_once Current_BaseDir."/forms/attendance-excel-registration/excel-registration.php";
                    register_attendance_members_excel(AccountInfoId, $user_id);
                ?>
            </div>
        </div>
    </div>
</div>