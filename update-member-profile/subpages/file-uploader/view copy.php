<?php
    $page = "file-uploader";
    $page_url = Current_BaseUrl."$page";
?>
<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="mb-3 card shadow">
            <div class="card-body">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-8 col-lg-8">
                        <?php          
                            $memberId = isset($_GET['member-id']) ? (int)$_GET['member-id'] : 0;
                            $questionId = isset($_GET['question-id']) ? (int)$_GET['question-id'] : 0;
                            $memberResponseId = isset($_GET['member-response-id']) ? (int)$_GET['member-response-id'] : 0;
                            $get_string = "membership/app/member?id=$memberId";
                            $member = $ccApi->fetch_from($get_string, function ($member) {
                                return isset($member[0]) ? $member : [];
                            }, $debug = false);

                            if (isset($member[0])) {   
                                $isRegistration = isset($_GET['is-registration']) ? $_GET['is-registration'] : 0;
                                $isRegistration = ((int)$isRegistration === 1) ? true: false;
                                
                                if ($isRegistration === true) {
                                    $get_string = "system-questions/question?question-id=$questionId&client-id=".AccountInfoId;
                                    $question = $ccApi->fetch_from($get_string, function ($notification) {
                                        return isset($notification[0]) ? $notification : [];
                                    }, $debug = false);
                                    
                                    if (isset($question[0])) {   
                                        require_once Current_BaseDir."/forms/$page/new-form.php";
                                    } else { ?>
                                        <h1 class="fa fa-2x">Question Not Found</h1>
                                    <?php }
                                } else {
                                    $formId = isset($_GET['form-id']) ? (int)$_GET['form-id'] : 0;

                                    $get_string = "system-questions/form/question?form-id=$formId&question-id=$questionId&client-id=".AccountInfoId;
                                    $question = $ccApi->fetch_from($get_string, function ($notification) {
                                        return isset($notification[0]) ? $notification : [];
                                    }, $debug = false);
                                    
                                    if (isset($question[0])) {                     
                                        $get_string = "system-questions/question?question-id=$questionId&client-id=".AccountInfoId;
                                        $question = $ccApi->fetch_from($get_string, function ($notification) {
                                            return isset($notification[0]) ? $notification : [];
                                        }, $debug = 1);
                                        
                                        require_once Current_BaseDir."/forms/$page/new-form.php";
                                    } else { ?>
                                        <h1 class="fa fa-2x">Question Not Found</h1>
                                    <?php }
                                }
                            } else { ?>
                                <h1 class="fa fa-2x">No Member Data Found</h1>
                            <?php }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>