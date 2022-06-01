<div class="app-sidebar sidebar-shadow">
                    <div class="app-header__logo">
                        <div class="logo-src"></div>
                        <div class="header__pane ml-auto">
                            <div>
                                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app-header__mobile-menu">
                        <div>
                            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                        </button>
                        </span>
                    </div>
                    <div class="scrollbar-sidebar">
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li class="app-sidebar__heading"><?= $account_info['pdc_name']; ?></li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>" mm-active="|index">
                                        <i class="metismenu-icon pe-7s-home"></i> Home
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Agents Data</li>
                                <li>
                                    <a href="#" mm-active="register-member|account-code">
                                        <i class="metismenu-icon pe-7s-note2"></i> Registration
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>register-member" mm-active="register-member">
                                                <i class="metismenu-icon"></i> New Registration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>excel-registration" mm-active="excel-registration">
                                                <i class="metismenu-icon"></i> Excel Registration
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="members|groups|subgroups">
                                        <i class="metismenu-icon pe-7s-users"></i> Agents Data
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Agents
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?search" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Search Agent
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?member-id-prefix" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Agent ID Prefix
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>members?member-ids" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Agent IDs
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="app-sidebar__heading">Communications</li>
                                <li>
                                    <a href="#" mm-active="contact-access-code|contact-group">
                                        <i class="metismenu-icon pe-7s-phone pe-7s-notebook"></i> Contact Bank 
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communication" mm-active="communication">
                                                <i class="metismenu-icon pe-7s-mail-open-file"></i> Contacts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-agent" mm-active="contact-agent">
                                                <i class="metismenu-icon">
                                                </i> Contact Agent(s)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-access-code" mm-active="contact-access-code">
                                                <i class="metismenu-icon">
                                                </i> Contact Form Access Code
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/contact-group" mm-active="contact-group">
                                                <i class="metismenu-icon">
                                                </i> Contact Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contact/connect-to-nstacom" mm-active="connect-to-nstacom">
                                                <i class="metismenu-icon">
                                                </i> Connect to Nstacom
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://app.nstacom.com/" target="_blank">
                                                <i class="metismenu-icon">
                                                </i> Go to Nstacom
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <?php
                                        $get_string = "mailer/members/new_count?account_id=$account_id";
                                        $message_count = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);
                                    ?>
                                    <a href="#" mm-active="members">
                                        <i class="metismenu-icon pe-7s-users"></i> Agent Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        <?= empty($message_count) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count) .'</span>'; ?>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?inbox" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Inbox <?= empty($message_count) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?outbox" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/members?compose" mm-active="members">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="contacts">
                                        <i class="metismenu-icon pe-7s-phone"></i> Contact Book Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?inbox" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?outbox" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/contacts?compose" mm-active="contacts">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" mm-active="peers">
                                        <i class="metismenu-icon pe-7s-id"></i> Peer Mail
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?messages" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Messages
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?inbox" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?outbox" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/peers?compose" mm-active="peers">
                                                <i class="metismenu-icon">
                                                </i>Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <?php
                                        $get_string = "mailer/customer-care/new_count?type=2&client_id=$account_id";
                                        $message_count_cc = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);

                                        $get_string = "mailer/customer-care/new_count?type=1&client_id=$account_id";
                                        $message_count_alt_cc = $ccApi->communications($type="clients", $get_string, function($messages)
                                        {
                                            return $messages;
                                        }, $debug = false);
                                    ?>
                                    <a href="#" mm-active="customer-care">
                                        <i class="metismenu-icon pe-7s-headphones"></i> Customer Care
                                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                        <?= empty($message_count) ? '': empty($message_count_alt_cc) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. (count($message_count_cc) + count($message_count_alt_cc)) .'</span>'; ?>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?messages" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>User Messages <?= empty($message_count_alt_cc) ? '': '<span class="badge badge-danger mx-2 d-flex pull-right my-2">'. count($message_count_alt_cc) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?inbox" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Inbox <?= empty($message_count_cc) ? '': '<span class="badge badge-danger ml-3 d-f lex pu ll-right my-2">'. count($message_count_cc) .'</span>'; ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?outbox" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Outbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?= CLIENT_BASE_URL; ?>communications/customer-care?compose" mm-active="customer-care">
                                                <i class="metismenu-icon">
                                                </i>Account Compose
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>communications/credit" mm-active="credit">
                                        <i class="metismenu-icon pe-7s-wallet"></i> Credit
                                    </a>
                                </li>
                                <li>
                                    <a href="<?= CLIENT_BASE_URL; ?>communications/sms-id" mm-active="sms-id">
                                        <i class="metismenu-icon pe-7s-id"></i> SMS ID
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
